function MusicPlayer() {
  return (
    <div className="grid md:grid-cols-2 max-sm:grid-cols-1  justify-items-center place-items-center max-sm:flex max-sm:flex-col gap-48 p-6">
      {/* music player card */}
      <div className="bg-amber-200 min-w-[36rem] max-w-[36rem] max-sm:min-w-[clamp(29rem,1.5vw,33rem)] h-[46rem] p-3 flex flex-col justify-center items-center rounded-2xl mt-26
      ">
        {/* player img block */}
        <div className="w-[90%]  h-[50%] bg-orange-300 rounded-2xl">
          <img src="" alt="Image" />
        </div>
        {/* music player control block */}
        <div className="mt-7 w-[90%] ">
          {/* artist info */}
          <div className="text-amber-900">
            <h2 className="font-extrabold text-[clamp(1.6rem,1.5vw,1.8rem)]">Song Title</h2>
            <p className="">Artist Name</p>
          </div>
          {/* music playing line */}
          <div className=" ">
            <progress className="h-3 w-full  "></progress>
          </div>
          {/* controls */}
          <div className="flex justify-around items-center">
            {/* shuffle button */}
            <div>
              <button className="cursor-pointer">
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9965 27.4167L30.625 22.7135M30.625 22.7135L25.9965 18.0104M30.625 22.7135H24.4537C22.4078 22.7135 20.4456 21.8877 18.999 20.4177C17.5523 18.9477 16.7395 16.9539 16.7395 14.875C16.7395 13.8456 16.54 12.8263 16.1523 11.8753C15.7647 10.9243 15.1965 10.0602 14.4801 9.33231C13.7638 8.60443 12.9134 8.02705 11.9775 7.63313C11.0416 7.2392 10.0385 7.03645 9.02542 7.03645H2.85413M25.9965 2.33333L30.625 7.03645M30.625 7.03645L25.9965 11.7396M30.625 7.03645H24.4537C22.7842 7.03418 21.1594 7.58451 19.8252 8.60416M2.85413 22.7135H9.02542C10.6949 22.7158 12.3197 22.1655 13.6539 21.1458"
                    stroke="#973C00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* previous button */}
            <div>
              <button className="cursor-pointer">
                <svg
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7708 2.67188V25.849C23.7664 26.2593 23.6524 26.661 23.4403 27.0131C23.2282 27.3652 22.9257 27.6549 22.5638 27.8526C22.2019 28.0502 21.7936 28.1488 21.3808 28.138C20.968 28.1273 20.5654 28.0077 20.2144 27.7915L2.80829 16.9753V26.9887C2.80829 27.2956 2.6856 27.5899 2.46719 27.8069C2.24879 28.0239 1.95258 28.1458 1.64371 28.1458C1.33484 28.1458 1.03863 28.0239 0.820225 27.8069C0.601823 27.5899 0.479126 27.2956 0.479126 26.9887V1.53212C0.479126 1.22523 0.601823 0.930914 0.820225 0.713912C1.03863 0.496911 1.33484 0.375 1.64371 0.375C1.95258 0.375 2.24879 0.496911 2.46719 0.713912C2.6856 0.930914 2.80829 1.22523 2.80829 1.53212V11.5455L20.2144 0.729367C20.565 0.510727 20.968 0.389158 21.3817 0.377247C21.7954 0.365336 22.2048 0.463516 22.5675 0.661622C22.9302 0.859728 23.233 1.15056 23.4445 1.504C23.6561 1.85745 23.7687 2.26065 23.7708 2.67188Z"
                    fill="#973C00"
                  />
                </svg>
              </button>
            </div>

            {/* play/pause button */}
            <div className="">
              <button className="cursor-pointer">
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
              </button>
            </div>

            {/* next button */}
            <div>
              <button className="cursor-pointer">
                <svg
                  width="25"
                  height="29"
                  viewBox="0 0 25 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.916666 2.8503V26.5664C0.921118 26.9862 1.03784 27.3973 1.25486 27.7576C1.47188 28.1179 1.78141 28.4143 2.15172 28.6166C2.52203 28.8189 2.93981 28.9197 3.36224 28.9087C3.78467 28.8977 4.19657 28.7753 4.55572 28.5541L22.3667 17.4864V27.7326C22.3667 28.0467 22.4922 28.3478 22.7157 28.5699C22.9392 28.7919 23.2423 28.9167 23.5583 28.9167C23.8744 28.9167 24.1775 28.7919 24.401 28.5699C24.6244 28.3478 24.75 28.0467 24.75 27.7326V1.68403C24.75 1.37 24.6244 1.06884 24.401 0.846794C24.1775 0.624746 23.8744 0.5 23.5583 0.5C23.2423 0.5 22.9392 0.624746 22.7157 0.846794C22.4922 1.06884 22.3667 1.37 22.3667 1.68403V11.9303L4.55572 0.862609C4.19703 0.638883 3.78467 0.514487 3.36134 0.502299C2.93801 0.490111 2.51909 0.590575 2.14796 0.793288C1.77684 0.996001 1.46699 1.29359 1.2505 1.65526C1.03402 2.01692 0.91876 2.42951 0.916666 2.8503Z"
                    fill="#973C00"
                  />
                </svg>
              </button>
            </div>

            {/* loop/repeat button  */}
            <div>
              <button className="cursor-pointer">
                <svg
                  width="36"
                  height="31"
                  viewBox="0 0 36 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.58331 16.2821C2.58331 11.1059 6.78376 6.94125 11.9241 6.94125H33.7194"
                    stroke="#973C00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.049 2.27084L33.7194 6.94125L29.049 11.6117"
                    stroke="#973C00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.7194 14.7253C33.7194 19.9015 29.519 24.0661 24.3786 24.0661H2.58331"
                    stroke="#973C00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25373 28.7365L2.58331 24.0661L7.25373 19.3957"
                    stroke="#973C00"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about and lyrics info block */}
      <div className="bg-amber-900 flex flex-col items-center  justify-center w-full h-[45rem]  rounded-2xl  max-sm:min-w-[30rem] mt-28 max-sm:mt-[-5rem]  max-sm:h-[30rem] p-5"  >
        <div className=" h-[18rem] w-[80%]  max-sm:w-[30rem] text-[clamp(1.7rem,1.5vw,2rem)]  bg-amber-200 rounded-xl text-amber-900">About Artist</div>
        <div className=" h-[10rem]  mt-20 active:h-[30rem] w-[30rem] text-[clamp(1.7rem,1.5vw,2rem)] rounded-xl  border border-amber-200 ">
        

          <p className="text-6xl text-amber-200">  Lyrics <br/>Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
