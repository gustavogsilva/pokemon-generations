import React from 'react'
import { useStateContext } from "../state/Context";
import { capitalize } from '../helpers/stringHelper'

export default function GameGenerationDetails() {

  const [{ gameGenerationDetails }] = useStateContext();
  const { name, mainRegion, versionGroups, pokemonTypes, pokemonSpecies } = gameGenerationDetails;

  function getIdFromUrl(url) {
    const startCut = url.indexOf('species/') + 8;
    return url.slice(startCut, -1);
  }

  function sortById(a, b) {
    const aId = Number(getIdFromUrl(a.url));
    const bId = Number(getIdFromUrl(b.url));
    if (aId < bId) return -1;
    if (aId > bId) return 1;
    return 0;
  }
  pokemonSpecies.sort(sortById);

  return (
      <ul className="generation-details py-2 px-4 mt-5">
        <li>Name: <span>{capitalize(name)}</span></li>
        <li>Main Region: <span>{capitalize(mainRegion)}</span></li>
        <li>
          <p className="m-0">Version Groups: <span>{versionGroups.length}</span></p>
          <ul className="version-groups d-flex flex-wrap p-0">
            {versionGroups.map((versionGroup,i) => <li className="badge-item" key={i} >{versionGroup.name}</li>)}
          </ul>
        </li>
        <li>
          <p className="m-0">New Pokémon Types: <span>{pokemonTypes.length}</span></p>
          <ul className="pokemon-types d-flex flex-wrap p-0">
            {pokemonTypes.map((pokemonType,i) => <li className="badge-item" key={i} >{pokemonType.name}</li>)}
          </ul>
        </li>
        <li>
          <p>New Pokémon Species: <span>{pokemonSpecies.length}</span></p>
          <ul className="pokemon-species d-flex flex-wrap justify-content-around p-0">
            {pokemonSpecies.map((pokemonSpecie,i) => {
              const id = getIdFromUrl(pokemonSpecie.url);
              return (
                <li key={i}>
                  <a className="pokemon-card border rounded"
                    href={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} 
                    title={pokemonSpecie.name} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img className="border-bottom" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
                    <p className="text-dark py-2 m-0">{capitalize(pokemonSpecie.name)}</p>
                  </a>
                </li>
              )
            })}            
          </ul>
        </li>
      </ul>
  )
}
