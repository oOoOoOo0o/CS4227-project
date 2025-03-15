import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CS4227-project/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Optional: Configure aliases if necessary
    },
  },
});