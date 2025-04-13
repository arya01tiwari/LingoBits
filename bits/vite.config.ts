// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bits/', // only if deployed under a subfolder
  plugins: [react()],
});
