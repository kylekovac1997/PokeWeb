import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/vitest.setup.ts']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',}}
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set your desired limit in kBs
    outDir: '/home/kyle/Desktop/PP/server/client',
    emptyOutDir: true,
    
  },
})