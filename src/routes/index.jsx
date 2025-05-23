import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routeToTitle, routeAliases } from "@/assets/data/routes/routeTitles";
import { ForgotPassword, Login, Register } from "../views/Login-Register";

const MainRoutes = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    document.title = findTitleForPath(currentPath) || "Stock Snap | Not found";
  }, []);
  const findTitleForPath = (path) => {
    let matchingRoute = routeToTitle[path] || null;
    if (!matchingRoute) {
      const alias = routeAliases[path];
      matchingRoute = alias ? routeToTitle[alias] : null;
    }
    return matchingRoute;
  };

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </Router>
  );
};

export default MainRoutes;
