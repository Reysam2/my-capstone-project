import { Link } from "react-router-dom";

import image from "../assets/amber-tune-logo.png"

function NavBar() {
  return (
    <nav className="w-[100%] absolute top-0 right-0 left-0 h-[10rem] bg-amber-100 z-10 flex justify-around items-center pt-6 ">
      <div className="w-[clamp(18rem,2.5vw,22rem)]">
        <img className="w-[100%] h-[100%] object-contain"  src={image} alt="AmberTune Logo" />
      </div>

      <div className="w-[55%] h-[80%]  flex justify-center items-center gap-x-10 text-amber-900">
        <Link className="font-bold " to="/">Home</Link>
        <Link className="font-bold " to="/player">Player</Link>
      </div>
    </nav>
  );
}

export default NavBar;
