import React from "react";

const PopUp = ({ info, onClick }) => {
  return (
    <div className="pop-up-back">
      <div className="pop-up-container">
        <p>{info}</p>
        <button onClick={onClick}>Jeszcze raz!</button>
      </div>
    </div>
  );
};

export default PopUp;
