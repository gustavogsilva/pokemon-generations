import React from 'react'
import { doGetRequest } from '../helpers/apiHelper'

export default function GameGenerationDetails() {

  doGetRequest('/generation/1/').then(console.log);
  return (
    <div className="border">
      <ul>
        <li>Name: </li>
        <li>Main Region: </li>
        <li>
          Version Groups:
          <ul>
            <li>Red-Blue</li>
            <li>Yellow</li>
          </ul>
        </li>
        <li>
          Pokémon Types:
          <ul>
            <li>Type 1</li>
            <li>Type 2</li>
          </ul>
        </li>
        <li>
          Pokémon Species:
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
