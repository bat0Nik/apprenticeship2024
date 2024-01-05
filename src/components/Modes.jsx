import { Link } from "react-router-dom";

const Modes = () => {
  return (
    <div>
      <Link to="/">Cofnij</Link>
      <h1>Wybierz tryb gry</h1>
      <Link to="/modes/mode1">50pkt</Link>
      <Link to="/modes/mode2">3 rzycia</Link>
    </div>
  );
};

export default Modes;
