import React from "react";
import { Link } from "react-router-dom";

const Mode1 = () => {
  return (
    <div>
      <div>
        <Link to="/modes">Cofnij</Link>
        <div>0/50</div>
      </div>
      <input type="number" />
      <input type="number" />
      <input type="number" />
    </div>
  );
};

export default Mode1;
