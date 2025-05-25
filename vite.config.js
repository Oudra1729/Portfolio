import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // Your site base path — change this if your Netlify URL path is different
  plugins: [react()],
})
