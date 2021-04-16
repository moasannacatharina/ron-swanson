import { navigate } from "@reach/router";
import "./home.css";

//components
import Title from "../../components/Title";
import Button from "../../components/Button";
import Image from "../../components/Image";

import image from "../../assets/images/swanson.svg";

const Home = () => {
  return (
    <div className="home-view">
      <Title size={"64"}>Ron SWANSON FAN PAGE</Title>
      <Image src={image} visible={"true"} width={"200"} />
      <div className="button-container">
        <Button handleClick={() => navigate("/gifs")}>find gifs</Button>
        <Button handleClick={() => navigate("/quotes")}>find quotes</Button>
      </div>
    </div>
  );
};

export default Home;
