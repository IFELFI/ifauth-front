import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@lib": "src/lib",
      "@components": "src/components",
      "@stores": "src/stores",
      "@utils": "src/utils",
      "@styles": "src/styles",
      "@types": "src/types"
    }
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
