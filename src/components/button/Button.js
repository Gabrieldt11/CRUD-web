import "./Styles.css";

function Button({name, click}) {

  return (
    <div className="button-container">
        <button className="button-item" onClick={click}>
          {name}
        </button>
    </div>
  );
}

export default Button;
