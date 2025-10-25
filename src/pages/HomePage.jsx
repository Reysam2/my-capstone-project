import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import SearchResults from "../components/SearchResults";
import HomeLibrary from "../components/HomeLibrary";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[100%] min-h-screen  bg-[radial-gradient(circle_at_center,_#4d1919_10%,_#783a3a_40%,_#b95b3c_50%,_#d67f4c_80%,_#f4caa9_100%)] mt-[10rem]">
        <HomeLibrary />
      </div>
    </QueryClientProvider>
  );
}

export default HomePage;
