import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./Styles.css";

const baseUrl = "https://localhost:7034/api/Usuario";

const errors = {
  emailAlreadyExists: "Email já cadastrado",
};

function LoginArea({ buttonName, users }) {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    var { name, email, pass } = document.forms[0];

    const userData = users.find((user) => user.email === email.value);

    if (userData) {
      setErrorMessages({
        name: "emailAlreadyExists",
        message: errors.emailAlreadyExists,
      });
    } else {
      const newUser = {
        nome: name.value,
        email: email.value,
        senha: pass.value,
      };
      postUsuario(newUser);
      alert("Usuário Registrado");
    }
  };

  const postUsuario = async (user) => {
    await axios
      .post(baseUrl, user)
      .then(navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-area-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Nome Completo"
            required
          />
        </div>

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
          {renderErrorMessage("emailAlreadyExists")}
        </div>

        <div className="input-button-container">
          <input className="input-button" type="submit" value={buttonName} />
        </div>
      </form>
    </div>
  );
}

export default LoginArea;
