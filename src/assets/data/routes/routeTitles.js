// routeToTitle.jsx
export const routeToTitle = {
  "/": "StockSnap | Login",
  "/login": "StockSnap | Login",
  "/register": "StockSnap | Register",
  "/dashboard": "StockSnap | Dashboard - Index",
  "/dashboard/home": "StockSnap | Dashboard - Index",
  "*": "StockSnap | Not found",
  // Agrega más rutas y títulos aquí
};

// Añade alias para las rutas
export const routeAliases = {
  "": ["*"],
  "/not-found": ["*"],
  // Agrega más alias si es necesario
};
