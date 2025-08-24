import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

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
    plugins: [svelte()],
})
