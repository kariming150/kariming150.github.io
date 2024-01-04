/**
 * Typing for the _data database
 */

export interface LinkTag {
    type: string // What kind of icon to use. 
    label?: string // If not given, use the `type` as the label
    link: string
}

export const TagIcons = {
    "Project": "",
    "Demo": "",
    "PDF": "",
    "Recording": "",
    "Preview": "",
    "Code": "",
    "DOI": "",
    "Slides": "",
    "BibTeX": "",
    "Data": "",
    "Blog": "",
}

export interface ProjectItem {
    title: string
    image: string
    description: string
    links: LinkTag[]
    venue: string
}