import { Link } from "react-router-dom";
import logo from "../images/LOGOMathGAMEv2.png";
import { useEffect, useCallback } from "react";

const Menu = ({ setMessage, setMenu }) => {
  const initializeMenu = useCallback(() => {
    setMessage("Witaj w MathGAME");
    setMenu(true);
  }, [setMessage, setMenu]);

  useEffect(() => {
    initializeMenu();
  }, [initializeMenu]);

  return (
    <div className="menu-container">
      <img src={logo} alt="logo" />
      <Link to="/modes">GRAJ</Link>
    </div>
  );
};

export default Menu;
