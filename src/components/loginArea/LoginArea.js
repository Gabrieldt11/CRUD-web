import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Styles.css";

const errors = {
  error: "Email ou senha inválido",
};

function LoginArea({users}) {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    var { email, pass } = document.forms[0];

    const userData = users.find((user) => user.email === email.value);

    if (userData) {
      if (userData.senha !== pass.value) {
        setErrorMessages({ name: "error", message: errors.error });
        console.log("senha");
      } else {
        navigate("/main", { state: { userData, users} })
      }
    } else {
      setErrorMessages({ name: "error", message: errors.error });
      console.log("email");
    }
  };

  const createAcount = () => {
    navigate("/register", { state: { users }})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="input-container">
          <input
            className="input"
            type="password"
            name="pass"
            placeholder="Senha"
            required
          />
          {renderErrorMessage("error")}
        </div>

        <div className="input-button-container">
          <input className="input-button" type="submit" value="Login" />
        </div>
      </form>

      <div className="create-container">
        <p>
          Não possui conta?{" "}
          <a className="create-link" href="register" onClick={createAcount}>
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginArea;
