
import React, { useEffect, useState } from 'react';

const ScoreKeeper = () => {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem('score')) || 0);

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
  };

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={incrementScore}>+</button>
      <button onClick={decrementScore}>-</button>
    </div>
  );
};

export default ScoreKeeper;
