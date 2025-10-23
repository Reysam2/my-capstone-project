 import { Link } from "react-router-dom";

function AmberTuneState({ isLoading, isError, error }) {
  let content;

  if (isLoading) {
    content = <h1 className="text-amber-200 text-6xl text-[clamp(2rem,2.5vw,3rem)]">We are working on your music...</h1>;
  } else if (isError) {
    content = (
      <h1 className="text-amber-200 text-6xl text-center  text-[clamp(2rem,2.5vw,3rem)]">
        Something went wrong. <br /> {error && <span>{error}</span>}
      </h1>
    );
  } else {
    content = <div className="text-center">
       <h1 className="text-center text-amber-200 text-6xl mb-5 text-[clamp(2rem,2.5vw,3rem)]">Everything is good at you end. 🎵</h1>;
    <p className="text-center text-amber-200 text-6xl mb-12 ">  This is on us.</p>

    <Link to="/" className="text-center text-amber-200 text-4xl mb-5  "><p className="animate-bounce">Back To Home</p></Link>
    </div>
  }

  return (
    <>
    
    <div className="w-full h-[100%] bg-[linear-gradient(135deg,_#4d1919_0%,_#783a3a_25%,_#b95b3c_50%,_#d67f4c_75%,_#f4caa9_100%)] absolute  ">
      <div className="w-full h-screen flex justify-center items-center absolute">
        {content}
      </div>
    </div>
    </>
  );
}

export default AmberTuneState;
