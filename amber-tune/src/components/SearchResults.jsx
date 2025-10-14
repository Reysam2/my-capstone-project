function SearchResults() {
  return (
    <div className="w-full min-h-[50rem] bg-amber-400 flex justify-center max-sm:w-[full] px-4">
      <div className="bg-amber-100  min-h-[45rem] max-h-100 mt-10 rounded-xl text-amber-900 flex flex-col  w-[29.5rem] sm:w-[67rem] max-sm:items-center      ">
        <h2>To display Search results</h2>

        {/* first song: search result card - large  */}
        <div className="bg-red-300 flex flex-col justify-center w-full">
          <div className="w-[clamp(26rem,1.5vw,28rem)] h-[18rem] bg-amber-50 flex flex-col justify-around border border-amber-900 p-4 ml-6 rounded-xl">
            {/* search results card thumbnail */}
            <div className="w-full h-[60%] bg-zinc-400 flex items-center">
              <div className="bg-red-300 h-[90%] w-[8rem] rounded-[60%] flex justify-center items-center">
                <img src="" alt="artist" />
              </div>
            </div>

            {/* search results card info */}
            <div className="w-full h-[35%]  flex  justify-between">
              <div className=" h-full flex flex-col justify-center">
                <h3 className="font-bold">Song Name</h3>
                <p>Artist Name</p>
              </div>

              {/* search results card info play btn */}
              <div className="bg-red-300 w-[5rem] flex justify-center items-center mr-4">
                <button className=" cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 32 32"
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* search cards list */}
        <div className="max-w-full min-w-[28rem]  bg-red-400 flex flex-col items-center mt-28">
          <div className="w-[95%] h-14 bg-gray-300 text-start">
            <p className="font-bold text-[clamp(1.6rem,2.5vw,1.9rem)]">Songs</p>
          </div>

          {/* cards list */}
          <div className="w-[95%] h-[5rem] bg-fuchsia-400 flex justify-around   ">
            {/* cards list thumbnail */}
            <div className="w-[4.4rem] h-[full] bg-zinc-400 flex items-center">
              <div className="bg-red-300 h-[90%] w-full  rounded-[60%] flex justify-center items-center">
                <img src="" alt="artist" />
              </div>
            </div>

            {/* cards list info */}

            <div className="w-[40rem] bg-orange-300  h-full pl-5 flex  justify-between">
              <div className=" h-full flex flex-col justify-center ">
                <h3 className="font-bold text-[clamp(1.5rem,2.5vw,1.6rem)]">
                  Song Name
                </h3>
                <p className="text-[clamp(1.4rem,2.5vw,1.5rem)]">Artist Name</p>
              </div>
            </div>

            {/* cards list play btn */}
            <div className="bg-red-300 w-[5rem] flex justify-center items-center mr-4">
              <button className=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
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
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
