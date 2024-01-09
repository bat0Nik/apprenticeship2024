import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";

const Mode2 = () => {
  return (
    <div>
      <div className="mode-top-bar">
        <Link to="/modes">Cofnij</Link>
        <div>3zycia</div>
      </div>
      <ModeInputs />
    </div>
  );
};

export default Mode2;
