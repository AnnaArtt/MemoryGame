import React from "react";
import "./FirstView.css";
const FirstView = ({ changeStatusGame }) => {
  return (
    <div className="firstViewWrapper">
      <h1>Start to play!</h1>
      <button onClick={changeStatusGame}>Start</button>
    </div>
  );
};

export default FirstView;
