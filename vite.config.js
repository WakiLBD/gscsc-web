import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The name here must match your GitHub Repository name exactly
  base: '/gscsc-web/', 
})