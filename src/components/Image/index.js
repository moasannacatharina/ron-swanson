import "./image.css";

const Image = ({ src, visible, width, page }) => {
  return (
    <img
      src={src}
      alt="gif"
      className={`gif ${visible} ${page}`}
      style={{ width: width }}
    />
  );
};

export default Image;
