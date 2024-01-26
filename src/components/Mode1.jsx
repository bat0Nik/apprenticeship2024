import ModeInputs from "./ModeInputs";
import { useState } from "react";
import BackButton from "./BackButton";

const Mode1 = ({
  setMessage,
  setBadAnswer,
  setGoodAnswer,
  setDisplay,
  windowWidth,
  difficulty,
}) => {
  const [points, setPoints] = useState(0);
  return (
    <div className="mode-container">
      <div className="mode-top-bar">
        <BackButton toLink="/modes/difficulty" />
        <h1>{points} / 50</h1>
      </div>
      <ModeInputs
        points={points}
        setPoints={setPoints}
        countPoints={true}
        setMessage={setMessage}
        setBadAnswer={setBadAnswer}
        setGoodAnswer={setGoodAnswer}
        setDisplay={setDisplay}
        windowWidth={windowWidth}
        difficulty={difficulty}
      />
    </div>
  );
};

export default Mode1;
