import { useApiStore } from "../store/GlobalApiStore";
import { useRef, useState } from "react";

function SearchResults() {
  const storedMusicData = useApiStore((state) => state.musicData);

  const [isPlaying, setIsPlaying] = useState(false);

  let firstSong = storedMusicData?.[0];
  console.log(firstSong);

  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);

  if (!firstSong) return <p>Loading...</p>;

  // updates the larger card on search results
  const {
    id,
    title_short,
    album: { cover },
    artist: { link, name, picture_big },
    preview,
  } = firstSong;

  // logic for playing music
  const playMusic = (preview) => {
    // if no audio exist , create and play
    if (!audioRef.current) {
      audioRef.current = new Audio(preview);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      // if a different song is click, stop the old one
      // and play the new one
      if (audioRef.current.src !== preview) {
        audioRef.current.pause();
        audioRef.current = new Audio(preview);
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        // toggle play and pause
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
      audioRef.current.onended = () => setIsPlaying(false);
    }
  };

  // {id, title_short, album:{cover}, artist:{link, name, picture_big}, preview }

  return (
    <div className="w-full min-h-[50rem] bg-amber-400 flex justify-center max-sm:w-[full] px-4">
      <div className="bg-amber-100  min-h-[45rem] max-h-100 mt-10 rounded-xl text-amber-900 flex flex-col  w-[29.5rem] sm:w-[67rem] max-sm:items-center      ">
        <h2>To display Search results</h2>

        {/* first song: search result card - large  */}
        <div className="bg-red-300 flex flex-col justify-center w-full">
          {
            <div className="w-[clamp(26rem,1.5vw,28rem)] h-[18rem] bg-amber-50 flex flex-col justify-around border border-amber-900 p-4 ml-6 rounded-xl">
              {/* search results card thumbnail */}
              <div
                key={id}
                className="w-full h-[60%] bg-zinc-400 flex items-center"
              >
                <div className="bg-red-300 h-[90%] w-[8rem] rounded-[60%] flex justify-center items-center overflow-clip">
                  <img className="h-full w-full" src={picture_big} alt={name} />
                </div>
              </div>

              {/* search results card info */}
              <div className="w-full h-[35%]  flex  justify-between">
                <div className=" h-full flex flex-col justify-center">
                  <h3 className="font-bold">{title_short}</h3>
                  <p>{name}</p>
                </div>

                {/* search results card info play btn */}
                <div className="bg-red-300 w-[5rem] flex justify-center items-center mr-4">
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
                        width="24"
                        height="24"
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
        </div>

        {/* search cards list - small */}

        <div className="max-w-full min-w-[28rem]  bg-red-400 flex flex-col items-center mt-28">
          {/* cards list heading title_short */}
          <div className="w-[95%] h-14 bg-gray-300 text-start">
            <p className="font-bold text-[clamp(1.6rem,2.5vw,1.9rem)]">Songs</p>
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
                  className="w-[100%] h-[5rem] bg-blue-700 flex flex-col justify-around items-center mb-6 "
                >
                  {/* cards list */}
                  <div className="w-[95%] h-[5rem] bg-fuchsia-400 flex justify-around ">
                    {/* cards list thumbnail */}
                    <div className="w-[4.4rem] h-full bg-zinc-400 flex items-center">
                      <div className="bg-red-300 h-[90%] w-[clamp(4.4rem,1.5vw,6rem)]  rounded-[60%] flex justify-center items-center overflow-clip">
                        <img
                          className=" h-full w-full"
                          src={cover}
                          alt="artist"
                        />
                      </div>
                    </div>

                    {/* cards list info */}
                    <div className="w-[52rem] bg-orange-300  h-full pl-5 flex  justify-between">
                      <div className=" h-full flex flex-col justify-center ">
                        <h3 className="font-bold text-[clamp(1.5rem,2.5vw,1.4rem)] line-clamp-3">
                          {title_short}
                        </h3>
                        <p className="text-[clamp(1.4rem,2.5vw,1.5rem)]">
                          {name}
                        </p>
                      </div>
                    </div>

                    {/* cards list play btn */}
                    <div className="bg-red-300 w-[5rem] flex justify-center items-center mr-4">
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
                            width="24"
                            height="24"
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
                    <div></div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
export default SearchResults;
