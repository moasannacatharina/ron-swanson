import "./image.css";

const Image = ({ src, visible }) => {
  return <img src={src} alt="gif" className={`gif ${visible}`} />;
};

export default Image;
