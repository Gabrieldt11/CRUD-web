import React, { useState, useEffect } from "react";
import LoginArea from "../../components/loginArea/LoginArea";
import Logo from "../../components/logo/Logo";

import axios from "axios";

import "./Styles.css";

const baseUrl = "https://localhost:7034/api/Usuario";

function Login() {
  const [users, setUsers] = useState([]);

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
    setTimeout(() => getUsuarios(), 1000)
  }, []);

  return (
    <div className="login-container">
      <Logo text="Login" />
      <LoginArea users={users} />
    </div>
  );
}

export default Login;
