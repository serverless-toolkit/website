import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

export default {
	plugins: [
		sveltekit(),
		// <workaround for https://github.com/sveltejs/kit/issues/5843>
		{
			config(config: any) {
				if (config.build.rollupOptions.output) {
					const original = config.build.rollupOptions.output.assetFileNames;
					config.build.rollupOptions.output.assetFileNames = (assetInfo: any) => {
						const match = assetInfo.name.match(/\/\+(.*)\.css$/);
						return match ? original.replace('[name]', match[1]) : original;
					};
				}
				return config;
			}
		}
		// </workaround>
	]
} as UserConfig;
