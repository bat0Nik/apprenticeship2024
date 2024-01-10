import { Link } from "react-router-dom";
import logo from "../images/LOGOMathGAMEv2.png";
import Soundbar from "./Soundbar";

const Menu = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="logo" />
      <Link to="/modes">GRAJ</Link>
      <Soundbar />
    </div>
  );
};

export default Menu;
