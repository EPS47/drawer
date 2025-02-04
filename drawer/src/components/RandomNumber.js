import React, { useState } from 'react';

function RandomNumber({ min, max }) {
  const [number, setNumber] = useState(null);

  const handleDraw = () => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(randomNumber);
  };

  return (
    <div>
      <h3>Sorteio de Números</h3>
      <button onClick={handleDraw}>Sortear Número</button>
      {number !== null && <p>O número sorteado é: {number}</p>}
    </div>
  );
}

export default RandomNumber;
