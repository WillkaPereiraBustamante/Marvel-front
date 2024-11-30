import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from "./assets/pages/Characters";
import Comics from "./assets/pages/Comics";
import Favorites from "./assets/pages/Favorites";
import Header from "./assets/components/Header";
import CharacterComics from "./assets/pages/CharacterComics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<CharacterComics />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
