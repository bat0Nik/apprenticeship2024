import streakBurger from "../images/streakBurger.png";

const Streak = ({ streak, setMessage }) => {
  const handleMouseEnter = () => {
    setMessage(
      "Liczba ta przedstawia ile dni z rzędu udało ci się zdobyć 50 pkt"
    );
  };

  return (
    <div className="streak" onMouseEnter={handleMouseEnter}>
      <img src={streakBurger} alt="" className={streak ? "" : "grey"} />
      <p className="streak-count">{streak}</p>
    </div>
  );
};

export default Streak;
