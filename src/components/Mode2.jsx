import { Link } from "react-router-dom";

const Mode2 = () => {
  return (
    <div>
      <div className="modeTopBar">
        <Link to="/modes">Cofnij</Link>
        <div>3zycia</div>
      </div>
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <button>Sprawdź</button>
    </div>
  );
};

export default Mode2;
