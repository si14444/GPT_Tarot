import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TarotPage from "./pages/TarotPage";
import ResultPage from "./pages/ResultPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tarot" element={<TarotPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
