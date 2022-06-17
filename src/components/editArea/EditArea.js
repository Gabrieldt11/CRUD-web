import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

import axios from "axios";

import "./Styles.css";

const baseUrl = "https://localhost:7034/api/Usuario";

const errors = {
  emailAlreadyExists: "Email já cadastrado",
};

function EditArea({ user, users }) {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

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
      const userEdited = {
        id: user.id,
        nome: name.value,
        email: email.value,
        senha: pass.value,
      };
      putUsuario(userEdited, userEdited.id);
    }
  };

  const putUsuario = async (userEdited, id) => {
    await axios.put(`${baseUrl}/${id}`, userEdited)
    .then(navigate("/main", {state: { userData: userEdited, users}}))
    .catch((error) => {
      console.log(error);
    });
  };
  

  const deleteUsuario = async () => {
    await axios.delete(`${baseUrl}/${user.id}`, {data: user})
    .then(alert("Usuário deletado"))
    .then(navigate("/"))
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="edit-area-container">
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Operação</th>
        </tr>
        <tr>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>
            <Button name="Editar" click={openCloseModal} />
            <Button name="Excluir" click={deleteUsuario} />
          </td>
        </tr>
      </table>
      {isOpen && (
        <div>
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
              <input className="input-button" type="submit" value="Editar" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditArea;
