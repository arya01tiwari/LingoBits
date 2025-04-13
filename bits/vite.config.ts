import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bits/', // Ensures assets are correctly referenced
  plugins: [react()],
});
