import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import SearchResults from "../components/SearchResults";
import HomeLibrary from "../components/HomeLibrary";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[100%] h-screen bg-[linear-gradient(135deg,_#4d1919_0%,_#783a3a_25%,_#b95b3c_50%,_#d67f4c_75%,_#f4caa9_100%)] relative mt-[10rem]">
        <HomeLibrary />
      </div>
    </QueryClientProvider>
  );
}

export default HomePage;
