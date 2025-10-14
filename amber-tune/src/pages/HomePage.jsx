import SearchBar from "../components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResults from "../components/SearchResults";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-dvh">
        <SearchBar />
        <SearchResults />
      </div>
    </QueryClientProvider>
  );
}

export default HomePage;
