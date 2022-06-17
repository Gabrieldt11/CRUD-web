import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RegisterArea from "../../components/registerArea/RegisterArea";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";

import "./Styles.css";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [users] = useState(location.state.users);

  const backButton = () => {
    navigate("/");
  };

  return (
    <div className="register-container">
      <Logo text="Registrar" />
      <RegisterArea buttonName="Registrar" users={users} />
      <Button name="Voltar" click={backButton} />
    </div>
  );
}

export default Register;
