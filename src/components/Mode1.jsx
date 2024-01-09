import { Link } from "react-router-dom";
import ModeInputs from "./ModeInputs";

const Mode1 = () => {
  return (
    <div>
      <div className="modeTopBar">
        <Link to="/modes">Cofnij</Link>
        <div>0/50</div>
      </div>
      <ModeInputs />
    </div>
  );
};

export default Mode1;
