import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleConnexionStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--willka-marvel-backend--79d24psydslc.code.run/user/login",
        {
          email,
          password,
        }
      );
      handleConnexionStatus(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="signup-container">
        <h2>LOGIN</h2>
        <form className="signup-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button>LOGIN</button>
        </form>
        <Link to="/user/signup">Pas encore de compte ? Inscris-toi !</Link>
      </div>
    </main>
  );
};

export default Login;
