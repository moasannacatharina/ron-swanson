import "./title.css";

const Title = ({ size, children }) => {
  return <h1 style={{ fontSize: size + "px" }}>{children}</h1>;
};

export default Title;
