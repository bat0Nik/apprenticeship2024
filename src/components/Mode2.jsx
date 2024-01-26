import ModeInputs from "./ModeInputs";
import { useState } from "react";
import Heart from "./Heart";
import LostHeart from "./LostHeart";
import BackButton from "./BackButton";

const Mode2 = ({
  setMessage,
  setBadAnswer,
  setGoodAnswer,
  setDisplay,
  windowWidth,
  difficulty,
}) => {
  const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="mode-top-bar">
        <BackButton toLink="/modes/difficulty" />
        <div className="heart-container">
          {lives >= 3 ? <Heart /> : <LostHeart />}
          {lives >= 2 ? <Heart /> : <LostHeart />}
          {lives >= 1 ? <Heart /> : <LostHeart />}
        </div>
      </div>
      <ModeInputs
        lives={lives}
        setLives={setLives}
        countPoints={false}
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

export default Mode2;
