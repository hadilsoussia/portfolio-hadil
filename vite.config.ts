// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // AJOUTEZ CETTE LIGNE : Spécifie le chemin de base pour le déploiement sur GitHub Pages
  base: '/portfolio-hadil/',
  plugins: [react()],
})