import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Tatuajes from "./components/Tatuajes/Tatuajes";
import Cuadros from "./components/Cuadros/Cuadros";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/tattoos" element={<Tatuajes />} />
          <Route path="/paintings" element={<Cuadros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
