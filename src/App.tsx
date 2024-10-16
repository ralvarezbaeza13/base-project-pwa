import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonPage from "./presentation/pages/PokemonPage";
import MapPage from "./presentation/pages/MapPage";
import "./i18n/config";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<PokemonPage />} />{" "}
            <Route path="/map" element={<MapPage />} />{" "}
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
