import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/FEELER-WEB/",  // 👈 Add this for GitHub Pages
  server: {
    allowedHosts: ['.ngrok-free.app'], // Allow all Ngrok subdomains
    host: '0.0.0.0', // Allows external access
    port: 5173, // Ensure this matches your Vite dev server port
    strictPort: false,
    cors: false
  }
})
