import Title from "../../components/Title";
import Button from "../../components/Button";
import Image from "../../components/Image";
import React from "react";
import "./gifs.css";

const Gifs = () => {
  const [clickResult, setClickResult] = React.useState([]);
  const [visible, setVisible] = React.useState("");
  const rootUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=ron%20swanson&limit=25&offset=0&rating=g&lang=en`;
  // const rootUrl = `https://api.giphy.com/v1/gifs/search?api_key=jQNzFVIY0nYeqhcXhKayzHa8bhOvQFpA&q=ron%20swanson&limit=25&offset=0&rating=g&lang=en`;

  return (
    <div className="gifs-view">
      <Title>find your favorite ron swanson gif</Title>
      <Button
        handleClick={() =>
          fetch(rootUrl)
            .then((response) => response.json())
            .then((json) => {
              const random = Math.floor(Math.random() * 10);
              setClickResult(json.data[random].images.original.url);
              setVisible("visible");
            })
        }
      >
        Press here
      </Button>
      <Image visible={visible} src={clickResult} />
    </div>
  );
};

export default Gifs;
