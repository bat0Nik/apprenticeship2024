import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";

const Mode1 = () => {
  return (
    <div className="mode-container">
      <div className="mode-top-bar">
        <Link to="/modes">Cofnij</Link>
        <div>0/50</div>
      </div>
      <ModeInputs />
    </div>
  );
};

export default Mode1;
