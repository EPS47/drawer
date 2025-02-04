import React, { useState } from 'react';

function RandomName({ names }) {
  const [winner, setWinner] = useState('');

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setWinner(names[randomIndex]);
  };

  return (
    <div>
      <h3>Sorteio de Nomes</h3>
      <button onClick={handleDraw}>Sortear Nome</button>
      {winner && <p>O vencedor é: {winner}</p>}
    </div>
  );
}

export default RandomName;
