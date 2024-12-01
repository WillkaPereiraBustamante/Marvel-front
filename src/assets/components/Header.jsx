import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleConnexionStatus }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-logo container">
        <div>
          {token ? (
            <div className="header-login-buttons">
              <button
                className="button-login-signup"
                onClick={() => {
                  handleConnexionStatus(null);
                  navigate("/");
                }}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="header-login-buttons">
              <Link to="user/signup">
                <button className="button-login-signup">signUp</button>
              </Link>
              <span>/</span>
              <Link to="user/login">
                <button className="button-login-signup">logIn</button>
              </Link>
            </div>
          )}
        </div>
        <Link to={"/"}>
          <div className="main-logo">
            <img src="src/assets/imgs/marvel_logo.png" alt="logo marvel" />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="header-search">
            <span>Search</span>
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
