import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GANTI ini sesuai nama repo kamu di GitHub
const repoName = 'News-W';

export default defineConfig({
  base: `/${repoName}/`, // ini wajib agar path-nya benar di GitHub Pages
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }
});
