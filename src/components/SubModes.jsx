import { Link } from "react-router-dom";
import Soundbar from "./Soundbar";
import BackButton from "./BackButton";

const SubModes = ({
  setMessage,
  setBadAnswer,
  setGoodAnswer,
  modePath,
  setDifficulty,
}) => {
  const handleMouseEnter1 = () => {
    setBadAnswer(false);
    setGoodAnswer(false);
    setDifficulty("easy");
    localStorage.setItem("diff", "easy");
    setMessage(
      "Działanie to dodawanie i odejmowanie, Zaczynasz w zakresie liczb od 1 do 25, po 25 poziomie zakres liczb zwieksza sie na od 1 do 100"
    );
  };
  const handleMouseEnter2 = () => {
    setBadAnswer(false);
    setGoodAnswer(false);
    setDifficulty("hard");
    localStorage.setItem("diff", "hard");
    setMessage(
      "Działanie to mnożenie i dzielenie, Zaczynasz w zakresie liczb od 1 do 25, po 25 poziomie zakres liczb zwieksza sie na od 1 do 100"
    );
  };
  return (
    <div className="modes-container">
      <div className="modes-top-bar">
        <BackButton toLink="/modes" />
        <Soundbar />
      </div>
      <div className="modes-choose">
        <h1>WYBIERZ POZIOM TRUDNOŚCI</h1>
        <Link to={modePath} onMouseEnter={handleMouseEnter1}>
          ŁATWY
        </Link>
        <Link to={modePath} onMouseEnter={handleMouseEnter2}>
          TRUDNY
        </Link>
      </div>
    </div>
  );
};

export default SubModes;
