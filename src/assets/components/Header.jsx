import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="container">
      <div className="header-logo">
        <div className="signin-signup">
          <p>signIn /signUp</p>
        </div>
        <div className="main-logo">
          <img src="src/assets/imgs/marvel_logo.png" alt="logo marvel" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
