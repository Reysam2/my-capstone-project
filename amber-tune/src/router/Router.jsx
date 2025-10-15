import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Player from "../pages/Player"; 
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
    element: <Player />
  }
  ]
 }
 ])