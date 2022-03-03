import React from "react";
import "./Die.scss";

function Die({ value, isHeld, holdDice, id }) {
  const styles = {
    backgroundColor: isHeld ? "#2f4436" : "#2c2c2c",
  };

  return (
    <div className="Die" style={styles} onClick={() => holdDice(id)}>
      <p>{value}</p>
    </div>
  );
}

export default Die;
