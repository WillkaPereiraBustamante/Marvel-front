import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-logo container">
        <Link to={"/user/signup"}>
          <div className="signin-signup">
            <p>signIn /signUp</p>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="main-logo">
            <img src="src/assets/imgs/marvel_logo.png" alt="logo marvel" />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="header-search">
            <span>Rechercher</span>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">CHARACTERS</Link>
          </li>
          <li>
            <Link to="/comics">COMICS</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORITES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
