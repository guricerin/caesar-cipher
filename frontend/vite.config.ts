import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // https://github.com/vitejs/vite/discussions/3396
    host: '0.0.0.0'
  }
})
