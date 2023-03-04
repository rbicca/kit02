import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components'
		}
		//Para trocar o root das rotas
		//e para trocar o caminho de $lib
		// files: {
		// 	routes: 'src/pages',
		//  lib: ''
		// }
	}
};

export default config;
