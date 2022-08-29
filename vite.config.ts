import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	build: {
		outDir: 'build'
	},
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' }
	},
	plugins: [
		react(),
		tsconfigPaths(),
		envCompatible(),
		viteCompression(),
		svgrPlugin({
			svgrOptions: {
				icon: true
				// ...svgr options (https://react-svgr.com/docs/options/)
			}
		})
	]
});
