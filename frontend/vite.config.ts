import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/caesar-cipher/", // https://ja.vitejs.dev/guide/static-deploy.html#github-pages
  plugins: [react()],
  server: {
    // https://github.com/vitejs/vite/discussions/3396
    host: '0.0.0.0'
  }
})
