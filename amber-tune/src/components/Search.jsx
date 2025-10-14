import { useState } from "react";
import { fetchMusicData } from "../services/SearchService";
import { useQuery } from "@tanstack/react-query";
import { useApiStore } from "../store/GlobalApiStore";

function MusicSearch() {

  const setMusicData = useApiStore((state) => state.setMusicData)
  const [searchTerm, setSearchTerm] = useState("");


  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["MusicData", searchTerm],
    queryFn: () => fetchMusicData(searchTerm),
    enabled: false,
    onSuccess: (data) => setMusicData(data)
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const result = await refetch();
    console.log(result.data.total);
    console.log(result.data.data);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong: {error.message}</p>;
  return (
    <div className="w-[100%] bg-gray-500 flex justify-center">
      <div className="w-[35rem] h-[5rem] border flex items-center justify-center bg-amber-300">
        <form
          onSubmit={handleSearch}
          className="w-full min-w-[2rem  bg-amber-200"
        >
          {/* form field */}
          <div className="border bg-red-500 flex items-center justify-center min-w-[2rem] relative">
            {/* search icon */}
            <div className="absolute left-[1.1rem] top-[0.7rem] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#7B3306" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"/></svg>
            </div>
            {/* search input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What do you want to play?"
              className="px-[5%] pl-[4rem]  border  w-full min-w-[5rem] h-[3.8rem]   outline-none bg-amber-100 rounded-3xl rounded-r-none placeholder-amber-900 text-[clamp(1.2rem,1.5vw,1.6rem)] pla"
            />

            {/* search button */}
            <button className="border h-[3.8rem] px-[1.6rem] rounded-3xl rounded-l-none bg-amber-100  text-amber-900" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MusicSearch;
