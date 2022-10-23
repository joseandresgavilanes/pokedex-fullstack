import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
