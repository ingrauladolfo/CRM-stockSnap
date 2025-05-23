import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { pathToTitle } from '../assets/data/routesPathToTile';

const RouteTitleHandler = () => {
   const location = useLocation();

  useEffect(() => {
    pathToTitle,
    document.title = pathToTitle[location.pathname] || 'StockSnap | Login';
  }, [location.pathname]);

  return null;
}

export default RouteTitleHandler