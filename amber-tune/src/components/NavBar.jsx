import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <nav className="w-[100%] h-[10rem] bg-amber-500">
      <Link to="/">Home</Link>
      <Link to="/player">Player</Link> 
    </nav>
   );
}

export default NavBar;