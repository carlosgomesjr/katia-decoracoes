import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: '../../node_modules/.vite/p004-site-outb-conceito-decor',
  plugins: [react(), tailwindcss()],
})
