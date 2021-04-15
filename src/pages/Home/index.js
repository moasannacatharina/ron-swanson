import "./home.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { navigate } from "@reach/router";

const Home = () => {
  return (
    <div className="home-view">
      <Title>Ron SWANSON FAN PAGE</Title>
      <div className="button-container">
        <Button handleClick={() => navigate("/gifs")}>find gifs</Button>
        <Button handleClick={() => navigate("/quotes")}>find quotes</Button>
      </div>
    </div>
  );
};

export default Home;
