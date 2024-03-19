import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="container xl:max-w-screen-xl">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-left" reverseOrder={false} />
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/complete-profile" element={<CompleteProfile />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
