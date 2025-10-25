import { useApiStore, useAudioStore } from "../store/GlobalApiStore";
import { Link, useNavigate } from "react-router-dom";

function SearchResults() {
  const navigate = useNavigate();

  const storedMusicData = useApiStore((state) => state.musicData);

  const { isPlaying, setIsPlaying } = useApiStore();

  let firstSong = storedMusicData?.[0];

  // set current song
  const { currentSong, setCurrentSong } = useApiStore();
  const audio = useAudioStore((state) => state.audioRef);

  const setSelectedSong = useApiStore((state) => state.setSelectedSong);

  // logic to close search result dialog
  const setIsVisible = useApiStore((state) => state.setIsVisible);
  const isVisible = useApiStore((state) => state.isVisible);

  // logic for the first music card
  if (!firstSong) return null;

  // updates the larger card on search results
  const {
    id,
    title_short,
    artist: { name, picture_big },
    preview,
  } = firstSong;

  // logic for playing music
const playMusic = (preview) => {
    // if a different song is clicked, stop the old one
    if (audio.src !== preview) {
      audio.pause();
      audio.src = preview; // set new audio source
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    } else {
      // toggle play/pause for the same song
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }

     setCurrentSong(preview)

    audio.onended = () => setIsPlaying(false); 
  };
  const handleCloseCard = () => {
    if (!isVisible) return null;
    setIsVisible(false);
  };

  // id of the selected song from search result
  //  it gets sent to the music player
  const songToPlayer = (id) => {
    setSelectedSong(id);
    audio.pause();
    audio.src = "";
    audio.currentTime = 0;
    setIsPlaying(false);
    navigate("/player", { replace: true });
  };

  return (
    <>
      {isVisible &&
        Array.isArray(storedMusicData) &&
        storedMusicData.length > 0 && (
          <div onDoubleClick={handleCloseCard}
            id="search_card"
            className="   flex  justify-center fixed inset-[-6rem] items-center overflow-y-auto bg-amber-70 backdrop-blur-md z-50  border-red-400"
          >
            <div className=" bg-gradient-to-br from-amber-100 via-amber-200 to-amber-100   border-amber-50 h-[45rem] mt-10 rounded-xl text-amber-900 flex flex-col w-[29.5rem] sm:w-[67rem] relative max-sm:items-center pt-6 shadow-xl drop-shadow-xl overflow-y-scroll overflow-x-clip transition-all duration-200 ease-in-out z-50 ">
              <div className="w-[100%] flex justify-end items-center h-[5rem]">
                <button
                  id="searchCardBtn"
                  onClick={handleCloseCard}
                  className="cursor-pointer absolute z-100 top-[-0.6rem] right-[-0.6rem] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="#7b3306"
                        fill-opacity="1"
                        d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
                      />
                      <path
                        stroke="#fef3c6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="1.8"
                        d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
                      />
                    </g>
                  </svg>
                </button>
              </div>

              {/* first song: search result card - large  */}
              <div className=" flex flex-col min-h-[25rem] justify-center w-full bg-gradient-to-t from-[#fee685] via-[#fef3c6] to-[rgb(254,243,198)] overflow-scroll relative ">
                {/* text and  player card container */}
                <div className="flex justify-around">
                  {
                    <div className="w-[clamp(26rem,1.5vw,28rem)] min-h-[18rem] bg-gradient-to-t from-[#fee685] via-[#fef3c6] to-[#fef3c6]  flex flex-col justify-around border border-amber-900 p-4 ml-6 rounded-xl">
                      {/* search results card thumbnail */}
                      <div
                        key={id}
                        className="w-full h-[60%]  flex items-center"
                      >
                        <div className=" h-[90%] w-[8rem] rounded-[60%] flex justify-center items-center overflow-clip ">
                          <img
                            className="h-full w-full"
                            src={picture_big}
                            alt={name}
                          />
                        </div>
                      </div>

                      {/* search results card info */}
                      <div className="w-full h-[35%]  flex  justify-between ">
                        <div className=" h-full flex flex-col justify-center">
                          <h3 className="font-bold">{title_short}</h3>
                          <p>{name}</p>
                        </div>

                        {/* search results card info play btn */}
                        <div className="w-[5rem] flex justify-center items-center mr-4">
                          <button
                            onClick={() => {
                              setCurrentSong(preview);
                              playMusic(preview);
                            }}
                            className="cursor-pointer"
                          >
                            {isPlaying && currentSong === preview ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="32"
                                width="32"
                                className="w-16 h-16 sm:w-[4rem]"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#7B3306"
                                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M8 7h3v10H8zm5 0h3v10h-3z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-16 h-16 sm:w-[4rem]"
                              >
                                <path
                                  fill="none"
                                  d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23"
                                />
                                <path
                                  fill="#7B3306"
                                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  }

                  <div className=" w-[26rem] max-sm:hidden">
                    <p className=" text-3xl font-extrabold mb-2">
                      Search Results
                    </p>
                    <p className=" text-2x mb-5">
                      Did not get your results? <br />
                      Search by Artist name, Album or Song title
                    </p>
                    <p className="text-4xl font-bold ">
                      Feel The Music. <br />
                      Own The Moment.
                    </p>
                  </div>
                </div>
              </div>

              {/* search cards list - small */}

              <div className="max-w-full min-w-[28rem]  flex flex-col items-center mt-28">
                {/* cards list heading title_short */}
                <div className="w-[95%] h-14  text-start">
                  <p className="font-bold text-[clamp(1.6rem,2.5vw,1.9rem)]">
                    Songs
                  </p>
                </div>

                {/* cards list container*/}
                {Array.isArray(storedMusicData) &&
                  storedMusicData.map(
                    ({
                      id,
                      title_short,
                      album: { cover },
                      artist: { name },
                      preview,
                    }) => (
                      <div
                        key={id}
                        className="w-[100%] h-[5rem]  flex flex-col justify-around items-center  rounded-[3rem] overflow-hidden  mb-2 "
                      >
                        {/* cards list */}
                        <div
                          className="w-[95%] h-[5rem]   flex justify-around  border-b-[0.1rem] rounded-[3rem]  shadow-2xl drop-shadow-2xl hover:shadow-2xl hover:drop-shadow-xl hover:shadow-amber-700 hover:scale-105 transition-all duration-200 ease-in-out 
                  hover:bg-gradient-to-r from-[#fee685] via-[#fef3c6] to-[#fef3c6] "
                        >
                          {/* cards list thumbnail */}
                          <div className="w-[4.4rem] h-full  flex items-center ">
                            <div className="bg-red-300 h-[90%] w-[clamp(4.4rem,1.5vw,6rem)]  rounded-[60%] flex justify-center items-center overflow-clip">
                              <img
                                className=" h-full w-full"
                                src={cover}
                                alt="artist"
                              />
                            </div>
                          </div>
                          <a onClick={() => songToPlayer(id)}>
                            {/* cards list info */}
                            <div className="w-[52rem] h-full pl-5 flex  justify-between">
                              <div className=" h-full flex flex-col justify-center ">
                                <h3 className="font-bold text-[clamp(1.5rem,2.5vw,1.4rem)] line-clamp-3">
                                  {title_short}
                                </h3>
                                <p className="text-[clamp(1.4rem,2.5vw,1.5rem)]">
                                  {name}
                                </p>
                              </div>
                            </div>
                          </a>
                          {/* cards list play btn */}
                          <div className="  w-[5rem] flex justify-center items-center mr-4">
                            <button
                              onClick={() => {
                                setCurrentSong(preview);
                                playMusic(preview);
                              }}
                              className="cursor-pointer"
                            >
                              {isPlaying && currentSong === preview ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="32"
                                  width="32"
                                  className="w-16 h-16 sm:w-[4rem]"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#7B3306"
                                    d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M8 7h3v10H8zm5 0h3v10h-3z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                  height="32"
                                  width="32"
                                  className="w-16 h-16 sm:w-[4rem]"
                                >
                                  <path
                                    fill="none"
                                    d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23"
                                  />
                                  <path
                                    fill="#7B3306"
                                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        )}
    </>
  );
}
export default SearchResults;
