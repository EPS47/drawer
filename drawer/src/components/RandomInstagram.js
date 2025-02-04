import React, { useState } from 'react';

function RandomInstagram({ instagramHandles }) {
  const [winner, setWinner] = useState('');

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * instagramHandles.length);
    setWinner(instagramHandles[randomIndex]);
  };

  return (
    <div>
      <h3>Sorteio de Instagram</h3>
      <button onClick={handleDraw}>Sortear Instagram</button>
      {winner && <p>O vencedor é: {winner}</p>}
    </div>
  );
}

export default RandomInstagram;
