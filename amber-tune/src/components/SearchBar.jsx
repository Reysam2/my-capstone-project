import { useState, useEffect } from "react";
import { fetchMusicData } from "../services/SearchService";
import { useQuery } from "@tanstack/react-query";
import { useApiStore } from "../store/GlobalApiStore";
import AmberTuneState from "./AmberTuneState";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const setMusicData = useApiStore((state) => state.setMusicData);
  const setIsVisible = useApiStore((state) => state.setIsVisible);

  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ["MusicData", searchTerm],
    queryFn: () => fetchMusicData(searchTerm),
    enabled: false,
    refetchOnWindowFocus: true,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsVisible(false);
    const refetchData = await refetch();
    if (refetchData.data) {
      setMusicData(refetchData.data);
      setIsVisible(true);
    }
  };

  const navigate = useNavigate();


  // navigate on error (not during render)
  useEffect(() => {
    if (isError) navigate("/error-page");
  }, [isError, navigate]);

  // handle loading and error states
  if (isLoading) return <AmberTuneState isLoading={true} />;
  if (isError) return <AmberTuneState isError={true} error={error?.message} />;


  return (
    <div className="w-[100%] flex justify-center flex-col items-center">
      <div className="w-[clamp(34rem,0.5vw,35rem)] h-[5rem] flex items-center justify-center  ">
        <form onSubmit={handleSearch} className="w-full min-w-[2rem] mt-5">
          {/* form field */}
          <div className=" flex items-center justify-center min-w-[2rem] relative">
            {/* search icon */}
            <div className="absolute left-[1.1rem] top-[0.7rem] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#7B3306"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"
                />
              </svg>
            </div>
            {/* search input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What do you want to play?"
              className="px-[5%] pl-[4rem]  border border-r-0  w-full min-w-[5rem] h-[3.8rem]   outline-none bg-amber-100 rounded-3xl rounded-r-none placeholder-amber-900 text-[clamp(1.2rem,1.5vw,1.6rem)]"
            />

            {/* search button */}
            <button
              className="border border-amber-900 border-l-0 h-[3.8rem] px-[1.6rem] rounded-3xl rounded-l-none cursor-pointer bg-amber-200  text-amber-900"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div
        className="text-amber-200    right-50  flex flex-col
      transition-all animate-pulse duration-200 ease-in-out justify-center items-center mt-5 p"
      >
        <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)]"> 
          We know! Don't panic,
        </h2>
        <h1 className="text-[clamp(2rem,2.5vw,2.4rem)] text-center">
          Life Without Music Feels Empty, Just Like This Page.
        </h1>
        <h1 className="text-[clamp(2rem,2.5vw,3rem)]">Good Music Never Dies!</h1>
        <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)]">
          Search to see the Magic.
        </h2>
      </div>
    </div>
  );
}

export default SearchBar;
