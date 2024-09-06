import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TarotPage from "./pages/TarotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tarot" element={<TarotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
