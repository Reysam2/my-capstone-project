 import { Link } from "react-router-dom";

function AmberTuneState({ isLoading, isError, error }) {
  let content;

  if (isLoading) {
    content = <h1 className="font-bold text-amber-200 text-6xl mb-5 text-[clamp(2rem,2.5vw,3rem)] text-center animate-pulse">We are working on your music...🎵</h1>;
  } else if (isError) {
    content = (
     <div>
   <h1 className="text-amber-200 text-6xl  mb-4  text-[clamp(2rem,2.5vw,3rem)]">
        Something went wrong.  
      </h1>
      <p  className="text-amber-200 text-6xl  mb-4  text-[clamp(1.8rem,2.5vw,2.3rem)]">{error && <span>{error}.</span>}</p>
     </div>
   
    )
  } else {
    content = <div className="flex flex-col items-start text-amber-200 px-5">
    
       <h1 className=" font-bold text-amber-200 text-6xl mb-5 text-[clamp(2rem,2.5vw,3rem)] ">Looks like there’s a problem with your internet connection.
       </h1>
       <p className=""> We can’t connect to the server at ambertune.com</p>

    <div className=" flex flex-col items-start w-[100%] mt-3 mb-10 text-[clamp(1.5rem,2.5vw,1.7rem)] ">
         <h2 className="mb-2">What can you do about it?</h2>
       <ul className="flex flex-col list-disc mt-4 ml-13">
        <li> Try connecting on a different device.</li>
        <li className="mt-4 mb-4"> Check your modem or router.</li>
        <li> Disconnect and reconnect to Wi-Fi.</li>
       </ul>
    </div>
    {/* <p className="text-center text-amber-200 text-6xl mb-12 ">  This is on us.</p> */}

    <Link to="/" className=" text-amber-200 text-4xl mb-5  self-end"><p className="animate-pulse font-bold ">Back To Home</p></Link>
    </div>
  }

  return (
    <>
    
    <div className="w-[100%] h-[100%] bg-[linear-gradient(135deg,_#4d1919_0%,_#783a3a_25%,_#b95b3c_50%,_#d67f4c_75%,_#f4caa9_100%)] absolute  ">
      <div className="w-full h-screen flex justify-center items-center absolute">
        {content}
      </div>
    </div>
    </>
  );
}

export default AmberTuneState;
