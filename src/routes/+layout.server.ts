import * as path from "path"
import * as glob from "glob"
import * as fs from "fs-extra"
import * as yaml from "js-yaml"
import yamlFront from "yaml-front-matter"

export const prerender = true

const globber = process.env.NODE_ENV === "production" ? glob.default : glob
const fser = process.env.NODE_ENV === "production" ? fs.default : fs

async function collectFiles(glob) {
    const files = globber.sync(glob).filter(fname => path.basename(fname, ".md")[0] != "_")
    const data = await Promise.all(files.map(async (fname) => {
        const fdata = await fser.readFile(fname, 'utf8')
        console.log(yamlFront)
        const parsedData = yamlFront.loadFront(fdata)

        // Capital named entries are added by the preprocessor.
        parsedData['FNAME'] = fname

        // Strip first two folders from path
        const folder = path.dirname(fname)
        parsedData['PATH'] = folder

        // Get the type of entry from the parent of the folder
        parsedData['TYPE'] = path.basename(path.dirname(folder))

        // Get the slug
        parsedData['SLUG'] = folder.split("/").slice(2).join("/")

        return parsedData
    }))
    return data
}
/**
 * Load all data for my website
 * @returns The yaml files converted into a database for generating the website
 */
export async function load() {
    // Populate the db to return 
    const db = {}

    // Collect yaml data stored in `_data/`
    const fnames = globber.sync(`_data/*.yaml`)
    const fkeys = fnames.map(fname => path.basename(fname, ".yaml"))
    const fileData = await Promise.all(fnames.map(async (fname) => {
        const fdata = await fser.readFile(fname, 'utf8')
        return yaml.load(fdata)
    }))
    fkeys.forEach((fkey, i) => {
        db[fkey] = fileData[i]
    })

    // Collect portfolio data stored in `_data/artwork/`, `_data/photography/`, `_data/CAD/`
    const portfolio = await collectFiles(`src/routes/portfolio/**/*.md`)
    // collectFiles(`_data/photography/*.md`).then((data) => {
    //     portfolio["photography"] = data
    // })
    // collectFiles(`_data/CAD/*.md`).then((data) => {
    //     portfolio["CAD"] = data
    // })
    db["portfolio"] = portfolio

    return db
}
