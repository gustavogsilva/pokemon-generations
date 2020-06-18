import React from 'react';
import { StateProvider } from './state/Context';
import { initialState } from './state/InitialState';
import { reducer } from './state/Reducer';
import PokemonLogo from './components/PokemonLogo'
import Nav from './components/Nav'
import GameGenerationDetails from './components/GameGenerationDetails'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="container">
        <PokemonLogo/>
        <Nav/>
        <GameGenerationDetails/>
      </div>
    </StateProvider>
  );
}

export default App;
