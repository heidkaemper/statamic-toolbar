import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
    publicDir: false,
    build: {
        lib: {
            entry: './resources/js/Toolbar.svelte',
            formats: ['iife'],
            name: 'toolbar',
            fileName: (format) => 'toolbar.js'
        },
    },
    plugins: [
        svelte({
            include: 'resources/js/Toolbar.svelte',
            compilerOptions: {
                customElement: true,
                tag: 'statamic-toolbar',
            },
            preprocess: sveltePreprocess({
                scss: {
                    includePaths: ['resources/css'],
                },
            }),
        }),
        svelte({
            exclude: 'resources/js/Toolbar.svelte',
            compilerOptions: {
                customElement: false,
            },
        }),
    ],
});
