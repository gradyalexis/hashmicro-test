import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin  } from 'vite-plugin-html';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    // viteSingleFile({ removeViteModuleLoader: true }), // Inline all assets into a single HTML file
    createHtmlPlugin({
      minify: true,
    }),
    mode === 'analyze' ? visualizer({ open: true, filename: 'bundle-analysis.html' }) : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    chunkSizeWarningLimit: 2000,
  },
}))