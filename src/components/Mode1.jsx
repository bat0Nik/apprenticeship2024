import ModeInputs from "./ModeInputs";
import { useState } from "react";
import BackButton from "./BackButton";

const Mode1 = () => {
  const [points, setPoints] = useState(0);
  return (
    <div className="mode-container">
      <div className="mode-top-bar">
        <BackButton toLink="/modes" />
        <p>{points}/50</p>
      </div>
      <ModeInputs points={points} setPoints={setPoints} countPoints={true} />
    </div>
  );
};

export default Mode1;
