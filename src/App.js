import React from 'react';
import { StateProvider } from './state/Context';
import { initialState } from './state/InitialState';
import { reducer } from './state/Reducer';
import Nav from './components/Nav'
import GameGenerationDetails from './components/GameGenerationDetails'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="container">
        <h1 className="text-center">POKEMON</h1>
        <p className="text-center">Select the Pokémon game generation you want to view more details</p>
        <Nav/>
        <GameGenerationDetails/>
      </div>
    </StateProvider>
  );
}

export default App;
