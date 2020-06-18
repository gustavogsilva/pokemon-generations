import React from 'react'
import pokemonLogo from '../img/pokemon.png'

export default function PokemonLogo() {
  return (
    <img className="d-block mx-auto mt-3 mb-4" src={pokemonLogo} alt="Pokémon"/>
  )
}
