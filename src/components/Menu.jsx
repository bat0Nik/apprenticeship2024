import { Link } from "react-router-dom";
import logo from "../images/LOGOMathGAMEv2.png";
// import logo from "../images/logoMathGAME.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="logo" />
      <Link to="/modes">GRAJ</Link>
    </div>
  );
};

export default Menu;
