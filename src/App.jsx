import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./assets/pages/Characters";
import Comics from "./assets/pages/Comics";
import Favorites from "./assets/pages/Favorites";
import Header from "./assets/components/Header";
import CharacterComics from "./assets/pages/CharacterComics";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Cookies from "js-cookie";
import Footer from "./assets/components/Footer";

function App() {
  const [token, setToken] = useState(Cookies.get("marvel-token") || null);

  const handleConnexionStatus = (token) => {
    if (token === null) {
      Cookies.remove("marvel-token");
    } else {
      Cookies.set("marvel-token", token, { expires: 14 });
    }
    setToken(token);
  };

  return (
    <Router>
      <Header token={token} handleConnexionStatus={handleConnexionStatus} />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<CharacterComics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/user/signup"
          element={<Signup handleConnexionStatus={handleConnexionStatus} />}
        />
        <Route
          path="/user/login"
          element={<Login handleConnexionStatus={handleConnexionStatus} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
