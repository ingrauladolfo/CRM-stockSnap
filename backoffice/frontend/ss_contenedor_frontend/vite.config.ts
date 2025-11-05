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
        /* General */
        ss_componentes_frontend: 'http://localhost:5001/assets/remoteEntry.js',
        /* Seguridad */
        ss_seguridad_frontend: 'http://localhost:5002/assets/remoteEntry.js',
        /* Vista inicial y Sidebar/Menú */
        ss_acceso_frontend: 'http://localhost:5003/assets/remoteEntry.js',
        ss_menu_frontend: 'http://localhost:5004/assets/remoteEntry.js',
        /* Dashboard */
        ss_ds_catalogos_frontend: 'http://localhost:5005/assets/remoteEntry.js',
        ss_ds_inventario_frontend: 'http://localhost:5006/assets/remoteEntry.js',
        ss_ds_compras_frontend: 'http://localhost:5007/assets/remoteEntry.js',
        ss_ds_ventas_frontend: 'http://localhost:5008/assets/remoteEntry.js',
        ss_ds_almacenes_frontend: 'http://localhost:5009/assets/remoteEntry.js',
        ss_ds_reportes_frontend: 'http://localhost:5010/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: { modulePreload: false, target: 'esnext', minify: false, cssCodeSplit: false }
})
