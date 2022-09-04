import React from "react";

import "./subPlayArea.styles.scss";

function SubPlayArea({ name, totalScore, currentScore, active }) {
  return (
    <div className={`subPlayArea ${active ? "active" : ""}`}>
      <div className="playerInfo">
        <h2 className="name">{name}</h2>
        <h3 className="score">{totalScore}</h3>
      </div>
      <div className="currentScoreContainer">
        <div className="currentScore__label">Current</div>
        <div className="currentScore">{currentScore}</div>
      </div>
    </div>
  );
}

export default SubPlayArea;
