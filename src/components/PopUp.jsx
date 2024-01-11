import React from "react";

const PopUp = ({ info, onClick, lost }) => {
  return (
    <div className="back">
      <div className="pop-up-container">
        <p>{info}</p>
        {lost && <span>Przegrałeś</span>}
        <button onClick={onClick}>Jeszcze raz!</button>
      </div>
    </div>
  );
};

export default PopUp;
