import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' : {
        target: 'https://crypto-tracker-backend-ccx0.onrender.com/',
        changeOrigin: true
      },
      '/profile' : {
        target: 'https://crypto-tracker-backend-ccx0.onrender.com/',
        changeOrigin: true
      }
    },
  },
  plugins: [react()],
})
