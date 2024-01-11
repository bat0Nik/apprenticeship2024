import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";
import { useState } from "react";

const Mode1 = () => {
  const [points, setPoints] = useState(0);
  return (
    <div className="mode-container">
      <div className="mode-top-bar">
        <Link to="/modes">Cofnij</Link>
        <p>{points}/50</p>
      </div>
      <ModeInputs points={points} setPoints={setPoints} countPoints={true} />
    </div>
  );
};

export default Mode1;
