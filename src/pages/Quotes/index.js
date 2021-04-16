import React from "react";
import "./quotes.css";

//Components
import Button from "../../components/Button";
import Svg from "../../components/Svg";
import Title from "../../components/Title";
import Quote from "../../components/Quote";

const Quotes = () => {
  const [clickResult, setClickResult] = React.useState([]);
  const [moving, setMoving] = React.useState(false);
  const [visible, setVisible] = React.useState("");
  const rootUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/`;

  return (
    <div className="quotes-view">
      <Title size={"47"}>Find your favorite ron swanson quote</Title>
      <Svg moving={moving} />
      <Button
        handleClick={() =>
          fetch(rootUrl)
            .then((response) => response.json())
            .then((json) => {
              setClickResult(json);
              setMoving(!moving);
              setVisible("visible");
            })
        }
      >
        PRESS HERE
      </Button>
      <Quote visible={visible}>{clickResult}</Quote>
    </div>
  );
};

export default Quotes;
