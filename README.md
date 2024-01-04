# khoov-github-io

Built from scratch using [SvelteKit](https://kit.svelte.dev/) and [tailwindcss](https://tailwindcss.com/). A favor for a sister.

1. All routes for the site are defined as subfolders in `src/routes/`. The homepage is `src/routes/+page.svelte`
2. An example entry is provided in `src/routes/portfolio/cad/santa-ornament/+page.md`. Every portfolio entry will have a structure similar to this.
3. The file `+layout.server.ts` reads in all information for your portfolio and expose the portfolio data in the `data` variable. This is then passed to every `+page.svelte` and `+page.md` by including the following in the `<script>` tag:

```
<script>
    export let data;
</script>
```

## Development


**Install Dependencies**:

You need the following tools (instructions for Windows):

1. [VSCode](https://code.visualstudio.com/download)
2. Install latest version of `NodistSetup-*.exe` from the [releases page](https://github.com/nodists/nodist/releases). Run the installer.
3. Install `pnpm` to save space on your computer

    ```
    npm install -g pnpm
    ```

4. Install [`git`](https://git-scm.com/download/win). Run the installer.
5. Clone the code to your local computer:

    ```
    git clone git@github.com:bhoov/khoov-github.git
    ```

We'll get this code uploaded to your own account later.

**Get developing**

From this project's root directory, run:

```bash
pnpm install # Run this whenever code changes
pnpm run dev # Run this whenever you want to start developing
```


## Building & deploying

The site is deployed using [`gh-pages`](https://www.npmjs.com/package/gh-pages). This creates a new `gh-pages` branch that contains the folder structure of the site we want to serve.

**WARNING: Never commit directly to the `gh-pages` branch!!**

Pushing to the `deploy` branch automatically builds the site and runs `gh-pages`. 

You can also run the deploy script manually.

```bash
npm run deploy
```