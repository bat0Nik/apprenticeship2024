import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";
import { useState } from "react";
import heart from "../images/heartIcon.png";
import lostHeart from "../images/lostHeartIcon.png";

const Mode2 = () => {
  const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="mode-top-bar">
        <Link to="/modes">Cofnij</Link>
        <div className="heart-container">
          {lives >= 3 ? (
            <img src={heart} alt="" />
          ) : (
            <img src={lostHeart} alt="" />
          )}
          {lives >= 2 ? (
            <img src={heart} alt="" />
          ) : (
            <img src={lostHeart} alt="" />
          )}
          {lives >= 1 ? (
            <img src={heart} alt="" />
          ) : (
            <img src={lostHeart} alt="" />
          )}
        </div>
      </div>
      <ModeInputs lives={lives} setLives={setLives} countPoints={false} />
    </div>
  );
};

export default Mode2;
