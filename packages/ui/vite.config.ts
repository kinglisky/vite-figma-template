import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), viteSingleFile()],

    build: {
        minify: process.argv.includes('watch'),
        outDir: resolve(__dirname, '../../dist'),
        rollupOptions: {
            output: {
                format: 'iife',
            },
            external: [],
        },
    },
});
