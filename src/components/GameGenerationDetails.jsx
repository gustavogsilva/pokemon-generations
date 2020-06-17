import React from 'react'
import { useStateContext } from "../state/Context";

export default function GameGenerationDetails() {

  const [{ gameGenerationDetails }] = useStateContext();
  const { name, mainRegion, versionGroups, pokemonTypes, pokemonSpecies } = gameGenerationDetails;

  return (
    <div className="border">
      <ul>
        <li>Name: {name} </li>
        <li>Main Region: {mainRegion}</li>
        <li>
          Version Groups:
          <ul>
            {versionGroups.map((versionGroup,i) => <li key={i} >{versionGroup.name}</li>)}
          </ul>
        </li>
        <li>
          New Pokémon Types:
          <ul>
            {pokemonTypes.map((pokemonType,i) => <li key={i} >{pokemonType.name}</li>)}
          </ul>
        </li>
        <li>
          New Pokémon Species:
          <ul className="pokemon-species d-flex flex-wrap p-0">
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            <li>
              <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt=""/> 
                Type 1
              </a>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  )
}
