import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { config } from 'dotenv'
// config();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
    outDir: 'dist',
  },
  base: '/', 
  server: {
    proxy: {
      '/__': {
        target: 'https://innovortex-59799.firebaseapp.com',
        changeOrigin: true,
        secure: false
      }
    },
}
})
