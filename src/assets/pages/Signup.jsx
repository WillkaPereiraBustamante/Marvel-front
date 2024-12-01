import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = ({ handleConnexionStatus }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("avatar", avatar);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData);

    try {
      const response = await axios.post(
        `http://localhost:4000/user/signup`,
        formData
      );
      if (response.data.token) {
        handleConnexionStatus(response.data.token);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setErrorMessage("Cet email a déjà un compte chez nous !");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container container">
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="file" className="label-file">
            <span>+</span>
            <span>Ajoute une photo</span>
          </label>
          <input
            className="input-file"
            type="file"
            id="file"
            onChange={(event) => {
              setAvatar(event.target.files[0]);
            }}
          />
        </div>
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="USERNAME"
          type="text"
        />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="EMAIL"
          type="email"
        />
        <span className="signup-login-error-message">{errorMessage}</span>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="PASSWORD"
          type="password"
        />
        <div className="checkbox-container">
          <div>
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Marvel. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">SIGNUP</button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
