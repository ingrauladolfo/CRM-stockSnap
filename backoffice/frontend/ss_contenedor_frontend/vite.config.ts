import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ss_contenedor_frontend',
      remotes: {
        ss_seguridad_frontend: 'http://localhost:5001/assets/remoteEntry.js',
        ss_menu_frontend: 'http://localhost:5002/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: { modulePreload: false, target: 'esnext', minify: false, cssCodeSplit: false }
})
