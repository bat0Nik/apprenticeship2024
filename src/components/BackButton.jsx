import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../images/backArrow.png";

const BackButton = ({ toLink }) => {
  return (
    <Link to={toLink} style={{ padding: "10px 30px" }}>
      <img src={backArrow} alt="" />
    </Link>
  );
};

export default BackButton;
