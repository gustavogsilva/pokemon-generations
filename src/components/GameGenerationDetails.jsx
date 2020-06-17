import React from 'react'
import { useStateContext } from "../state/Context";

export default function GameGenerationDetails() {

  const [{ gameGenerationDetails }] = useStateContext();
  const { name, mainRegion, versionGroups, pokemonTypes, pokemonSpecies } = gameGenerationDetails;

  return (
    <div className="border">
      <ul className="generation-details py-2 px-4">
        <li>Name: {name} </li>
        <li>Main Region: {mainRegion}</li>
        <li>
          Version Groups:
          <ul className="version-groups d-flex flex-wrap p-0">
            {versionGroups.map((versionGroup,i) => <li key={i} >{versionGroup.name}</li>)}
          </ul>
        </li>
        <li>
          New Pokémon Types:
          <ul className="pokemon-types d-flex flex-wrap p-0">
            {pokemonTypes.map((pokemonType,i) => <li key={i} >{pokemonType.name}</li>)}
          </ul>
        </li>
        <li>
          New Pokémon Species:
          <ul className="pokemon-species d-flex flex-wrap p-0">
            {pokemonSpecies.map((pokemonSpecie,i) => {
              const startCut = pokemonSpecie.url.indexOf('species/') + 8;
              const id = pokemonSpecie.url.slice(startCut, -1);
              return (
                <li key={i}>
                  <a className="border rounded" href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                    <img className="border-bottom" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/> 
                    <p className="text-dark py-2 m-0">{pokemonSpecie.name}</p>
                  </a>
                </li>
              )
            })}            
          </ul>
        </li>
      </ul>
    </div>
  )
}
