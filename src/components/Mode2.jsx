import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";
import { useState } from "react";
import Heart from "./Heart";
import LostHeart from "./LostHeart";

const Mode2 = () => {
  const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="mode-top-bar">
        <Link to="/modes">Cofnij</Link>
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
