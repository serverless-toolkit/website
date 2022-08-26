import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [mdsvex(), preprocess()],
	kit: {
		adapter: adapter({ autoDeploy: true })
	}
};
