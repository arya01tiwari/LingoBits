import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bits/',  // this is crucial for proper routing in subfolders
  plugins: [react()],
})
