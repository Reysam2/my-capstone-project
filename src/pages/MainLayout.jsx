import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom';


function MainLayout() {
  return ( 
    <div>
      <Navbar />
      <Outlet />
    </div>
   );
}

export default MainLayout;
