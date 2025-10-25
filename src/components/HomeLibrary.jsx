import { useRef, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useApiStore, useAudioStore } from "../store/GlobalApiStore";
import { useNavigate } from "react-router-dom";

function HomeLibrary() {
  const navigate = useNavigate();

  const { selectedSong, setSelectedSong, setPlayerData, setIsPlaying } =
    useApiStore();
  const audio = useAudioStore((state) => state.audioRef);

  const scrollRef = useRef();
  const recentRef = useRef();
  const recomRef = useRef();

  const { scrollAmount } = useApiStore();
  useApiStore();

  // Reusable scroll handler
  const handleScroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollValue =
      direction === "left" || direction === "top"
        ? -scrollAmount
        : scrollAmount;
    ref.current.scrollBy({
      left: scrollValue,
      top: scrollValue,
      behavior: "smooth",
    });
  };

  // get local stored music
  let storedMusicData =
    JSON.parse(localStorage.getItem("stored-music-data")) || {};
  try {
    storedMusicData =
      JSON.parse(localStorage.getItem("stored-music-data")) || {};
  } catch {
    storedMusicData = {};
  }

  // console.log("Stored Data",storedMusicData.state.musicData);
  // Get the selected song from local storage
  const recentSongsObj = storedMusicData?.state?.musicData.find(
    (song) => song.id === selectedSong
  );

  console.log("Stored Data", recentSongsObj);

  const recentSongs = storedMusicData?.state?.musicData || [];

  //  const {id, title_short , album:{cover_medium },
  //     artist: { name, link },
  //     preview } = recentSongs

  // logic to ru when a user clicks on the recent or recommended data
  const songToPlayer = (id) => {
    setSelectedSong(id);
    audio.pause();
    audio.src = "";
    audio.currentTime = 0;
    setIsPlaying(false);
    setPlayerData(recentSongsObj);
    navigate("/player", { replace: true });
    audio.load();
  };

  //recommendations base on user searched history
  // randomly display some stored music data

  function getRandomSongs(arr, count) {
    // shuffle array
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    // take first `count` elements
    return shuffled.slice(0, count);
  }

  const [randomSongs, setRandomSongs] = useState([]);

  useEffect(() => {
    // do an initial shuffle
    setRandomSongs(getRandomSongs(recentSongs, 10));

    // start reshuffling every 10 seconds
    const interval = setInterval(() => {
      const recommendedMusic = getRandomSongs(recentSongs, 10);
      setRandomSongs(recommendedMusic);
    }, 10000);

    // clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []); // rerun if recentSongs changes

  return (
    <>
      <div className="  h-full w-full mt-15 overflow-y-auto  relative">
        <SearchBar />
        <SearchResults />
        {/* genres container */}

        <div className=" w-[100%] h-[25rem] flex flex-col mt-10 p-4  rounded-xl relative">
          <div className="  w-full h-[20rem] flex flex-col justify-around relative ">
            {/* scroll buttons */}

            <div className="w-[5rem]  max-sm:right-[1rem]    h-[12rem] flex flex-col  items-end absolute right-25 z-10  snap-y-mandatory">
              {/* left scroll button */}
              <button
                className=" absolute top-0 h-3 right-5 cursor-pointer opacity-50 hover:opacity-100 active:translate-y-[-0.7rem] shadow-[20rem] hover:scale-130 transition-all duration-200 ease-in-out "
                onClick={() => handleScroll(scrollRef, "top")}
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
                    d="m1 10l6.5-7l6.5 7"
                    stroke-width="6"
                  />
                </svg>
              </button>

              {/* right scroll b */}
              <button
                className="absolute bottom-3 h-3 right-5 cursor-pointer opacity-50 hover:opacity-100 shadow-[20rem] shadow-amber-300 drop-shadow-2xl hover:scale-130 active:translate-y-[0.7rem] transition-all duration-200 ease-in-out "
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
                    d="m14 5l-6.5 7L1 5"
                    stroke-width="6"
                  />
                </svg>
              </button>
            </div>

            {/* genres heading */}
            <div className="">
              <div className="ml-[17rem] mb-5">
                <p className="font-extrabold text-amber-200 text-[clamp(2rem,2.5vw,3rem)]">
                  Genres
                </p>
              </div>
            </div>
            {/* genres list */}
            <div
              ref={scrollRef}
              className=" w-[80%]    gap-10 gap-y-17 px-13 py-2 overflow-y-hidden grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative  self-center"
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
                className="absolute left-3 h-3 cursor-pointer opacity-70 hover:opacity-100 active:translate-x-[-0.7rem] hover:scale-130 transition-all duration-200 ease-in-out"
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
                className="absolute right-3 h-3 cursor-pointer opacity-70 hover:opacity-100 shadow-2xl drop-shadow-2xl active:translate-x-[0.7rem] hover:scale-130 transition-all duration-200 ease-in-out"
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
              {Array.isArray(recentSongs) &&
                recentSongs.length > 2 &&
                recentSongs.map((song) => (
                  <div
                    onClick={() => songToPlayer(song.id)}
                    key={song.id}
                    className="  flex-shrink-0 w-[clamp(20rem,1.5vw,20rem)] h-[clamp(22rem,1.5vw,23rem)] max-sm:h-[20rem] max-sm:w-[20rem]  flex flex-col items-center justify-around   shadow-md drop-shadow-md hover:shadow-2xl hover:shadow-amber-100 
hover:drop-shadow-amber-700 hover:drop-shadow-2xl hover:scale-90 transition-all duration-200 ease-in-out hover:backdrop-blur-2xl text-[#333] hover:text-amber-200 "
                  >
                    <div className="h-[60%] max-sm:h-[65%] w-[90%] flex items-center justify-center     bg-amber-800   overflow-hidden  p-2  shadow-md hover:shadow-xl transition-all duration-300 ">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        src={song.album.cover_medium}
                        alt=""
                      />
                    </div>
                    {/* recent info  */}
                    <div
                      className="h-[30%] w-[100%] flex flex-col pl-3 justify-center transition-all duration-200 ease-in-out  overflow-y-hidden
"
                    >
                      <h1 className=" text-amber-200 text-[clamp(1.5rem,2.5vw,1.5rem)] font-bold w-full overflow-x-hidden">
                        {song.title_short}
                      </h1>
                      <p className="text-[clamp(1.5rem,2.5vw,1.5rem)] font-[600]">
                        {song.artist.name}
                      </p>
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
                className=" absolute left-3 h-3 cursor-pointer opacity-70 hover:opacity-100 active:translate-x-[-0.7rem] hover:scale-130 transition-all duration-200 ease-in-out"
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
                className="absolute right-3 h-3 cursor-pointer opacity-70 hover:opacity-100 shadow-2xl drop-shadow-2xl active:translate-x-[0.7rem] hover:scale-130 transition-all duration-200 ease-in-out"
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
              {Array.isArray(randomSongs) &&
                randomSongs.map((song) => (
                  <div
                    onClick={() => {
                      songToPlayer(song.id);
                    }}
                    key={song.id}
                    className="  flex-shrink-0 w-[clamp(20rem,1.5vw,20rem)] h-[clamp(22rem,1.5vw,23rem)] max-sm:h-[20rem] max-sm:w-[20rem]  flex flex-col items-center justify-around   shadow-md drop-shadow-md hover:shadow-2xl hover:shadow-amber-100 
hover:drop-shadow-amber-700 hover:drop-shadow-2xl hover:scale-90 transition-all duration-200 ease-in-out hover:backdrop-blur-2xl text-[#333] hover:text-amber-200 "
                  >
                    <div className="h-[60%] max-sm:h-[65%] w-[90%] flex items-center justify-center     bg-amber-800   overflow-hidden  p-2  shadow-md hover:shadow-xl transition-all duration-300 ">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        src={song.album.cover_medium}
                        alt=""
                      />
                    </div>
                    {/* recent info  */}
                    <div
                      className="h-[30%] w-[100%] flex flex-col pl-3 justify-center transition-all duration-200 ease-in-out  overflow-y-hidden
"
                    >
                      <h1 className=" text-amber-200 text-[clamp(1.5rem,2.5vw,1.5rem)] font-bold w-full overflow-x-hidden">
                        {song.title_short}
                      </h1>
                      <p className="text-[clamp(1.5rem,2.5vw,1.5rem)] font-[600]">
                        {song.artist.name}
                      </p>
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
// 🧡
export default HomeLibrary;
