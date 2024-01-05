import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>MathGAME</h1>
      <Link to="/modes">Graj</Link>
    </div>
  );
};

export default Menu;
