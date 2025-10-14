import SearchBar from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const   queryClient = new QueryClient();


function App() {
  return (
 <QueryClientProvider client={queryClient}>
   <div className="w-full h-dvh">
      <SearchBar />

  </div>
 </QueryClientProvider>
  );
}

export default App;
