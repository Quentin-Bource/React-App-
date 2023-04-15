import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokémon" element={<Pokemon />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;