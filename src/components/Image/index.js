import "./image.css";

const Image = ({ src, visible, width }) => {
  return (
    <img
      src={src}
      alt="gif"
      className={`gif ${visible}`}
      style={{ width: width }}
    />
  );
};

export default Image;
