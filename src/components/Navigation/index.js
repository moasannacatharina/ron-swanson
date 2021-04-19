import { Link } from "@reach/router";

import Image from "../Image";
// import logo from "../../assets/images/swanson.svg";
import logo from "../../assets/images/ronswanson.svg";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="image-container">
        <Link className="link" to="/">
          <Image src={logo} width={"40px"} visible={"menu"} />
          <span>Go home!</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
