import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  plugins: [
    cleanup(),
    shopify({
      themeRoot: './',
      sourceCodeDir: 'resources',
      snippetFile: 'vite.liquid',
      additionalEntrypoints: ['resources/css/app.css', 'resources/js/app.js'],
    }),
  ],
})
