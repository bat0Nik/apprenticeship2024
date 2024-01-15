import ModeInputs from "./ModeInputs";
import { useState } from "react";
import Heart from "./Heart";
import LostHeart from "./LostHeart";
import BackButton from "./BackButton";

const Mode2 = () => {
  const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="mode-top-bar">
        <BackButton toLink="/modes" />
        <div className="heart-container">
          {lives >= 3 ? <Heart /> : <LostHeart />}
          {lives >= 2 ? <Heart /> : <LostHeart />}
          {lives >= 1 ? <Heart /> : <LostHeart />}
        </div>
      </div>
      <ModeInputs lives={lives} setLives={setLives} countPoints={false} />
    </div>
  );
};

export default Mode2;
