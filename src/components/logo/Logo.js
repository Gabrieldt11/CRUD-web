import logo from "../../images/smar.png";

import "./Styles.css";

function Logo({text}) {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <p className="logo-login-text">{text}</p>
    </div>
  );
}

export default Logo;
