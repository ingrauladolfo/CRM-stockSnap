import { ComponentesApp } from 'ss_componentes_frontend/App'
import { SeguridadApp } from 'ss_seguridad_frontend/App'
import { AccesoApp } from 'ss_acceso_frontend/App'
import { MenuApp } from 'ss_menu_frontend/App'
import { DSCatalogosApp } from 'ss_ds_catalogos_frontend/App'
import { DSInventarioApp } from 'ss_ds_inventario_frontend/App'
import { DSComprasApp } from 'ss_ds_compras_frontend/App'
import { DSVentasApp } from 'ss_ds_ventas_frontend/App'
import { DSAlmacenesApp } from 'ss_ds_almacenes_frontend/App'
import { DSReportesApp } from 'ss_ds_reportes_frontend/App'
export const App = () => {
  return (
    <div>
      <ComponentesApp />
      <SeguridadApp />
      <AccesoApp />
      <MenuApp />
      <DSCatalogosApp />
      <DSInventarioApp />
      <DSComprasApp />
      <DSVentasApp />
      <DSAlmacenesApp />
      <DSReportesApp />
    </div>
  )
}
