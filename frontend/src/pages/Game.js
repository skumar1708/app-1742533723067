import React, { useState, useEffect } from 'react';
import RunningMan from '../components/RunningMan';
import Wall from '../components/Wall';
import GameOver from '../components/GameOver';

function Game() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [wallPosition, setWallPosition] = useState(window.innerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wallPosition > 0) {
        setWallPosition(wallPosition - 10);
      } else {
        setIsGameOver(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wallPosition]);

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      setWallPosition(window.innerWidth);
      setIsGameOver(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="game-container">
      {isGameOver ? (
        <GameOver />
      ) : (
        <>
          <RunningMan />
          <Wall style={{ left: wallPosition }} />
        </>
      )}
    </div>
  );
}

export default Game;