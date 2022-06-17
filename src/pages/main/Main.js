import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditArea from "../../components/editArea/EditArea";
import Button from "../../components/button/Button";
import logo from "../../images/smar.png";

import axios from "axios";

import "./Styles.css";

const baseUrl = "https://localhost:7034/api/Usuario";

function Main() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(location.state.userData);

  const getUsuarios = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const backButton = () => {
    navigate("/");
  };

  console.log(location.state.users);

  useEffect(() => {
    setCurrentUser(location.state.userData)
  }, [location.state.userData]);

  return (
    <div className="main-container">
      <header>
        <div className="logo-container">
          <img className="main-logo" src={logo} alt="logo" />
        </div>
      </header>

      <div className="principal-text-container">
        <h1>Olá {currentUser.nome}</h1>
        <h2>Aqui você pode editar ou excluir sua conta</h2>
      </div>

      <div className="edit-container">
        <EditArea user={currentUser} users={location.state.users} />
      </div>

      <footer className="main-footer-container">
        <Button name="Sair" click={backButton} />
      </footer>
    </div>
  );
}

export default Main;
