import MusicPlayer from "../components/MusicPlayer";

function PlayerPage() {
  return (
    <div
      className=" mt-[10rem] bg-[radial-gradient(circle_at_center,_#4d1919_10%,_#783a3a_40%,_#b95b3c_50%,_#d67f4c_80%,_#f4caa9_100%)] 
    "
    > 
      <MusicPlayer />
    </div>
  );
}

export default PlayerPage;
