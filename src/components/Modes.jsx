import { Link } from "react-router-dom";
import Soundbar from "./Soundbar";
import BackButton from "./BackButton";

const Modes = ({ setMessage, setMenu }) => {
  setMenu(false);
  const handleMouseEnterButton1 = () => {
    setMessage(
      "Tryb polega na zebraniu 50pkt wykonując działania matematyczne. Punkty dostajesz za dobrze wykonane działania, a za złą odpowiedź je tracisz."
    );
  };

  const handleMouseEnterButton2 = () => {
    setMessage(
      "Tryb polega na zdobyciu jak największej poprawnych odpowiedzi. Posiadasz tylko 3 życia. Za błędną odpowiedź odbierane jest jedno życie"
    );
  };

  return (
    <div className="modes-container">
      <div className="modes-top-bar">
        <BackButton toLink="/" />
        <Soundbar />
      </div>
      <div className="modes-choose">
        <h1>WYBIERZ TRYB GRY</h1>
        <Link to="/modes/mode1" onMouseEnter={handleMouseEnterButton1}>
          ZBIERZ 50 PKT
        </Link>
        <Link to="/modes/mode2" onMouseEnter={handleMouseEnterButton2}>
          3 ŻYCIA
        </Link>
      </div>
    </div>
  );
};

export default Modes;
