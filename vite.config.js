import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-repo/', // 👈 Isso é ESSENCIAL pro GitHub Pages funcionar!

})
