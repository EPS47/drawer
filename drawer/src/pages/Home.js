import React from 'react';
import RandomName from '../components/RandomName';
import RandomNumber from '../components/RandomNumber';
import RandomInstagram from '../components/RandomInstagram';

function Home() {
  const names = ['João', 'Maria', 'Pedro', 'Ana'];
  const instagramHandles = ['@joao', '@maria', '@pedro', '@ana'];

  return (
    <div>
      <h1>Bem-vindo ao Sorteio App</h1>
      <RandomName names={names} />
      <RandomNumber min={1} max={100} />
      <RandomInstagram instagramHandles={instagramHandles} />
    </div>
  );
}

export default Home;
