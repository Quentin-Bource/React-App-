import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import About from "./pages/About";
import Table from "./pages/Table";
import FichePoke from "./pages/FichePoke";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/fiche/:id" element={<FichePoke />} />
        <Route path="/table" element={<Table />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;