import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  cacheDir: '../../node_modules/.vite/p005-site-katia-decoracoes',
  plugins: [react(), tailwindcss()],
})
