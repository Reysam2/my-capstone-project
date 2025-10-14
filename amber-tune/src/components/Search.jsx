import { useState } from "react";
import { fetchMusicData } from "../services/SearchService";
import { useQuery } from "@tanstack/react-query";

function MusicSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError, error, refetch  } = useQuery({
    queryKey: ["MusicData", searchTerm],
    queryFn: () => fetchMusicData(searchTerm ),
    enabled: false
   });

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchTerm.trim()) return
      const result = await refetch()
    console.log(result.data.total)
    console.log(result.data.data)
  };

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Something went wrong: {error.message}</p>
  return (
    <div>
      <div className="w-[35rem] h-[5rem] border flex items-center justify-center bg-amber-600">
        <form onSubmit={handleSearch} className="w-full  flex items-center justify-center">
          {/* form field */}
          <div className="border">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-[5%]   border w-full h-[3.8rem]  outline-none"
            />
          </div>

          <button className="border h-[3.8rem] px-[1.6rem] " type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default MusicSearch;
