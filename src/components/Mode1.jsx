import ModeInputs from "./ModeInputs";
import { useState } from "react";
import BackButton from "./BackButton";
import Streak from "./Streak";

const Mode1 = ({
  setMessage,
  setBadAnswer,
  setGoodAnswer,
  setDisplay,
  windowWidth,
  difficulty,
  streak,
  incrementStreak,
  setBadAnswersChart,
  badAnswersChart,
}) => {
  const [points, setPoints] = useState(49);
  return (
    <div className="mode-container">
      <div className="mode-top-bar">
        <BackButton toLink="/modes/difficulty" />
        <Streak streak={streak} setMessage={setMessage} />
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
        streak={streak}
        incrementStreak={incrementStreak}
        setBadAnswersChart={setBadAnswersChart}
        badAnswersChart={badAnswersChart}
      />
    </div>
  );
};

export default Mode1;
