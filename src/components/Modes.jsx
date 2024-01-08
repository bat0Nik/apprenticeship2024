import { Link } from "react-router-dom";
import { useState } from "react";

const Modes = () => {
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  let [description, setDescription] = useState("");

  const handleMouseEnterButton1 = () => {
    setIsButton1Hovered(true);
    setDescription("Tryb polega na zebraniu 50pkt wykonując działania matematyczne.\n Zasady:\n 1. Punkt dostajesz za dobrze wykonane działanie, a za złe tracisz jeden punkt.\n 2. Z dalszym ciągiem punktowym działania zyskują na trudności i są coraz trudniejsze.\n");
  };

  const handleMouseLeaveButton1 = () => {
    setIsButton1Hovered(false);
  };

  const handleMouseEnterButton2 = () => {
    setIsButton2Hovered(true);
    setDescription("Tryb polega na ciągłym wykonywaniu poprawie działań matematycznym ma się tylko 3 życia po ich utracie przegrywasz. Każde działanie to następny LEVEL");
  };

  const handleMouseLeaveButton2 = () => {
    setIsButton2Hovered(false);
  };

  return (
    <div>
      <Link to="/">Cofnij</Link>
      <h1>Wybierz tryb gry</h1>
      <Link
        to="/modes/mode1"
        onMouseEnter={handleMouseEnterButton1}
        onMouseLeave={handleMouseLeaveButton1}
      >
        Zbierz 50 punktów
      </Link>
      <Link
        to="/modes/mode2"
        onMouseEnter={handleMouseEnterButton2}
        onMouseLeave={handleMouseLeaveButton2}
      >
        3 życia
      </Link>

      {isButton1Hovered && <p>{description}</p>}
      {isButton2Hovered && <p>{description}</p>}
    </div>
  );
};

export default Modes;
