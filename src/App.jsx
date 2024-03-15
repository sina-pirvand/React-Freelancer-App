import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="container xl:max-w-screen-xl">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
