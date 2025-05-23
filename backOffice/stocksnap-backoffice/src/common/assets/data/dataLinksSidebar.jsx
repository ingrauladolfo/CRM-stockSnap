import { FaHome, FaShoppingBasket, FaShoppingCart } from "react-icons/fa"
import { FaBook, FaBoxesPacking, FaCashRegister, FaGear, FaTruck } from "react-icons/fa6"
import { GrCatalogOption } from "react-icons/gr"
import { HiMiniArrowsRightLeft } from "react-icons/hi2"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"

const sidebarLinksData = [
  {
    href: "/",
    icon: <FaHome className="mr-2" size={18} />,
    title: "Inicio",
  },
  {
    href: "/catalogs",
    icon: <FaBook className="mr-2" size={18} />,
    title: "Catálogos",
    children: [
      {
        href: '/catalogs/products',
        icon: <MdOutlineProductionQuantityLimits className="mr-2" size={16} />,
        title: "Productos",
      }, {
        href: '/catalogs/providers',
        icon: <FaTruck className="mr-2" size={16} />,
        title: "Proveedores"
      }
    ],
  },
  {
    href: "/stock",
    icon: <GrCatalogOption className="mr-2" size={18} />,
    title: "Inventario",
    children: [
      {
        href: '/stock/movements',
        icon: <HiMiniArrowsRightLeft className="mr-2" size={16} />,
        title: "Movimientos (entradas y salidas)"

      },
      {
        href: '/stock/config',
        icon: <FaGear className="mr-2" size={16} />,
        title: "Ajustes"
      }
    ],
  },
  {
    href: "/purchases",
    icon: <FaShoppingCart className="mr-2" size={18} />,
    title: "Compras",
    children: [
      {
        href: "/purchases/orders",
        icon: <FaShoppingBasket className="mr-2" size={16} />,
        title: "Órdenes de compra",
      },
      {
        href: "/purchases/incoming-merchandise",
        icon: <FaBoxesPacking className="mr-2" size={16} />,
        title: "Recepción de mercancia",
      }
    ]
  },
  {
    href: "/sales",
    icon: <FaCashRegister className="mr-2" size={18} />,
    title: "Ventas",

  },

]

export default sidebarLinksData