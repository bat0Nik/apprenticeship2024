import { Link } from "react-router-dom";
import { useState } from "react";

const Modes = () => {
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  let [description, setDescription] = useState("");

  const handleMouseEnterButton1 = () => {
    setIsButton1Hovered(true);
    setDescription("tryb 50 punktów");
  };

  const handleMouseLeaveButton1 = () => {
    setIsButton1Hovered(false);
  };

  const handleMouseEnterButton2 = () => {
    setIsButton2Hovered(true);
    setDescription("tryb 3 życia");
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
        50pkt
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
