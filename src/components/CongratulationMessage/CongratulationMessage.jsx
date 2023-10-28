import React from "react";
import "./CongratulationMessage.css";

const CongratulationMessage = () => {
  return (
    <div className="wrapperMessage">
      <div className="message">
        <h2>Congratulations!</h2>
        <p>Your time: </p>
        <button
          onClick={() => {
            location.reload();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default CongratulationMessage;
