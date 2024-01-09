import { Link } from "react-router-dom";
import { useState } from "react";

const Modes = () => {
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  let [description, setDescription] = useState("");

  const handleMouseEnterButton1 = () => {
    setIsButton1Hovered(true);
    setDescription(
      "Tryb polega na zebraniu 50pkt wykonujac dzialania matematyczne. Punkty dostajesz za dobrze wykonane dzialania, a za zla odpowiedz je tracisz."
    );
  };

  const handleMouseLeaveButton1 = () => {
    setIsButton1Hovered(false);
  };

  const handleMouseEnterButton2 = () => {
    setIsButton2Hovered(true);
    setDescription(
      "Tryb polega na zdobycou jak niwiekszej ilosci punktow. Posiadasz tylko 3 zycia. Za bledna odpowiedz odbieane jest jedno zycie"
    );
  };

  const handleMouseLeaveButton2 = () => {
    setIsButton2Hovered(false);
  };

  return (
    <div>
      <Link to="/">Cofnik</Link>
      <h1>WYBIERZ TRYB GRY</h1>
      <Link
        to="/modes/mode1"
        onMouseEnter={handleMouseEnterButton1}
        onMouseLeave={handleMouseLeaveButton1}
      >
        ZBIERZ 50 PKT
      </Link>
      <Link
        to="/modes/mode2"
        onMouseEnter={handleMouseEnterButton2}
        onMouseLeave={handleMouseLeaveButton2}
      >
        3 ZYCIA
      </Link>

      {isButton1Hovered && <p>{description}</p>}
      {isButton2Hovered && <p>{description}</p>}
    </div>
  );
};

export default Modes;
