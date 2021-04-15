import "./button.css";

const Button = (props) => {
  return (
    <div className="button">
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  );
};

export default Button;
