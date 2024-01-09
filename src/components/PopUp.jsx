import React from "react";

const PopUp = ({ info, onClick }) => {
  return (
    <div className="back">
      <div className="pop-up-container">
        <p>{info}</p>
        <button onClick={onClick}>OK</button>
      </div>
    </div>
  );
};

export default PopUp;
