import { Link } from "@reach/router";

import Image from "../Image";
// import logo from "../../assets/images/swanson.svg";
import logo from "../../assets/images/ronswanson.svg";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link className="link" to="/">
        <Image src={logo} width={"40px"} visible={"menu"} />
      </Link>
    </nav>
  );
};

export default Navigation;
