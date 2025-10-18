import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlayerPage from "../pages/PlayerPage"; 
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <MainLayout />,
  children: [
     {
    path: '/',
    element: <HomePage />
    
  },
  {
    path: '/player',
    element: <PlayerPage />
  }
  ]
 }
 ])