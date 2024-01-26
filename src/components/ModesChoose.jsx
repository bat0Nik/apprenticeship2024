import { Link } from "react-router-dom";

const ModesChoose = ({ onMouseEnter1, onMouseEnter2, path }) => {
  return (
    <div className="modes-choose">
      <h1>WYBIERZ TRYB GRY</h1>
      <Link to={path} onMouseEnter={onMouseEnter1}>
        ZBIERZ 50 PKT
      </Link>
      <Link to={path} onMouseEnter={onMouseEnter2}>
        3 ŻYCIA
      </Link>
    </div>
  );
};

export default ModesChoose;
