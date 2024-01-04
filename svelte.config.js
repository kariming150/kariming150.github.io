import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'
import { importAssets } from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] }), importAssets()],
	prerender: {
		crawl: true,
		enabled: true,
		onError: 'continue',
		default: true
	},

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "" : "",
		},
	}
};

export default config;
