import React, { useState } from 'react';

const StudyUseState = () => {
  const [increaseNumber, setIncreaseNumber] = useState(0);
  const clickNumber = () => {
    setIncreaseNumber(1);
  };
  return (
    <div>
      <h1>Number is </h1>
      <h2>{increaseNumber}</h2>
      <button onClick={clickNumber} type="button">Click</button>
    </div>
  );
};

export default StudyUseState;
