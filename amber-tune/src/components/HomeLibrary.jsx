import {useRef} from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useApiStore } from "../store/GlobalApiStore";

function HomeLibrary() {
  const scrollRef = useRef();
  const recentRef = useRef();
  const recomRef = useRef();

  const { scrollAmount } = useApiStore();
  useApiStore();

  // Reusable scroll handler
  const handleScroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
    ref.current.scrollBy({
      left: scrollValue,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchBar />
      <SearchResults />
      <div className="  h-full w-full mt-15 overflow-y-auto   overflow-x-clip ">
        {/* genres container */}

        <div className=" w-[100%] h-[25rem] flex flex-col mt-10 p-4  rounded-xl relative">
          <div className="  w-full h-[25rem] flex flex-col justify-around relative ">
            {/* scroll buttons */}

            <div className="w-full bg-transparent h-[3rem] flex justify-around absolute top-25 z-10 ">
              {/* left scroll button */}
              <button
                className=" absolute left-3 h-3 cursor-pointer opacity-50 hover:opacity-100 shadow-[20rem] "
                onClick={() => handleScroll(scrollRef, "left")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="M10 14L3 7.5L10 1"
                    stroke-width="6"
                  />
                </svg>
              </button>

              {/* right scroll b */}
              <button
                className="absolute right-3 h-3 cursor-pointer opacity-50 hover:opacity-100 shadow-[20rem] shadow-amber-300 drop-shadow-2xl"
                onClick={() => handleScroll(scrollRef, "right")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="m5 14l7-6.5L5 1"
                    stroke-width="6"
                  />
                </svg>
              </button>
            </div>

            {/* genres heading */}
            <div className="">
              <div className="ml-14">
                <p className="font-extrabold text-amber-200 text-[clamp(2rem,2.5vw,3rem)]">
                  Genres
                </p>
              </div>
            </div>
            {/* genres list */}
            <div
              ref={scrollRef}
              className=" flex gap-10 px-13 py-2 overflow-x-hidden   relative "
            >
              {/* genre cards */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-amber-950 flex-shrink-0 w-[clamp(14rem,1.5vw,17rem)] h-[clamp(12rem,1.5vw,17rem)] rounded-xl flex flex-col items-center justify-center relative"
                >
                  <h1 className="text-amber-200  absolute">Jazz {i + 1}</h1>
                  <div>Image 🧡</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recently played container */}
        <div className=" w-[100%] h-[40rem] flex flex-col justify-around mt-20 p-4 rounded-xl relative ">
          <div className="  w-full h-[30rem] flex flex-col justify-between  relative  mt-4 ">
            {/* scroll buttons */}

            <div className="w-full bg-transparent h-[3rem] flex justify-around absolute top-20 z-10">
              {/* left scroll button */}
              <button
                onClick={() => handleScroll(recentRef, "left")}
                className=" absolute left-3 h-3 cursor-pointer opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  className="shadow-2xl drop-shadow-2xl"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="M10 14L3 7.5L10 1"
                    stroke-width="6"
                  />
                </svg>
              </button>

              {/* right scroll b */}
              <button
                onClick={() => handleScroll(recentRef, "right")}
                className="absolute right-3 h-3 cursor-pointer opacity-70 hover:opacity-100 shadow-2xl drop-shadow-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="m5 14l7-6.5L5 1"
                    stroke-width="6"
                  />
                </svg>
              </button>
            </div>

            {/* genres heading */}
            <div className="">
              <div className="ml-14 ">
                <p className="font-extrabold text-amber-200 text-[clamp(2rem,2.5vw,3rem)]">
                  Recently Played
                </p>
              </div>
            </div>
            {/* recently played list */}
            <div
              ref={recentRef}
              className=" flex gap-10 px-13 py-2 overflow-x-hidden    "
            >
              {/* genre cards */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-amber-100 flex-shrink-0 w-[clamp(20rem,1.5vw,20rem)] h-[clamp(22rem,1.5vw,23rem)] max-sm:h-[20rem] max-sm:w-[20rem] rounded-3xl flex flex-col items-center justify-around border shadow-md drop-shadow-md hover:shadow-2xl hover:shadow-amber-100 
                  hover:drop-shadow-amber-700 hover:drop-shadow-2xl hover:scale-90 transition-all duration-200 ease-in-out hover:backdrop-blur-2xl"
                >
                  <div className="h-[60%] max-sm:h-[65%] w-[90%] flex items-center justify-center border rounded-xl">
                    Image 🧡
                  </div>
                  {/* recent info  */}
                  <div className="h-[25%] w-[90%] flex flex-col pl-3 justify-center  border ">
                    <h1 className="text-amber-900   ">Song Title {i + 1}</h1>
                    <p>Artist Name {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended songs container */}

        <div className=" w-[100%] h-[40rem] flex flex-col justify-around mt-20 p-4 rounded-xl relative ">
          <div className="  w-full h-[30rem] flex flex-col justify-between  relative  mt-4 ">
            {/* scroll buttons */}

            <div className="w-full bg-transparent h-[3rem] flex justify-around absolute top-20 z-10">
              {/* left scroll button */}
              <button
                onClick={() => handleScroll(recomRef, "left")}
                className=" absolute left-3 h-3 cursor-pointer opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  className="shadow-2xl drop-shadow-2xl"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="M10 14L3 7.5L10 1"
                    stroke-width="6"
                  />
                </svg>
              </button>

              {/* right scroll b */}
              <button
                onClick={() => handleScroll(recomRef, "right")}
                className="absolute right-3 h-3 cursor-pointer opacity-70 hover:opacity-100 shadow-2xl drop-shadow-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="#fef3c6"
                    stroke-linecap="square"
                    d="m5 14l7-6.5L5 1"
                    stroke-width="6"
                  />
                </svg>
              </button>
            </div>

            {/* genres heading */}
            <div className="">
              <div className="ml-14 ">
                <p className="font-extrabold text-amber-200 text-[clamp(2rem,2.5vw,3rem)]">
                  Recommended Songs
                </p>
              </div>
            </div>
            {/* genres list */}
            <div
              ref={recomRef}
              className=" flex gap-10 px-13 py-2 overflow-x-hidden     "
            >
              {/* genre cards */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-amber-100 flex-shrink-0 w-[clamp(20rem,1.5vw,20rem)] h-[clamp(22rem,1.5vw,23rem)] max-sm:h-[20rem] max-sm:w-[20rem] rounded-3xl flex flex-col items-center justify-around border shadow-md drop-shadow-md hover:shadow-2xl hover:shadow-amber-100 
                  hover:drop-shadow-amber-700 hover:drop-shadow-2xl hover:scale-90 transition-all duration-200 ease-in-out hover:backdrop-blur-2xl"
                >
                  <div className="h-[60%] max-sm:h-[65%] w-[90%] flex items-center justify-center border rounded-xl">
                    Image 🧡
                  </div>
                  {/* recent info  */}
                  <div className="h-[25%] w-[90%] flex flex-col pl-3 justify-center  border ">
                    <h1 className="text-amber-900   ">Song Title {i + 1}</h1>
                    <p>Artist Name {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLibrary;
