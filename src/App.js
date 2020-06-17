import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './components/Nav'
import GameGenerationDetails from './components/GameGenerationDetails'

function App() {
  return (
    <div className="container">
      <h1 className="text-center">POKEMON</h1>
      <p className="text-center">Select the Pokémon game generation you want to view more details</p>
      <Nav/>
      <GameGenerationDetails/>

    </div>
  );
}

export default App;
