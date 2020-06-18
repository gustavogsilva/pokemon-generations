import React, { useState } from 'react'
import { useStateContext } from "../state/Context";
import { changeGameGeneration } from "../state/Actions";
import { doGetRequest } from '../helpers/apiHelper'

export default function Nav() {
  
  const [activeItem, setActiveItem] = useState(null);
  const [, dispatch] = useStateContext();

  function navClick(number) {
    setActiveItem(number);
    doGetRequest(`/generation/${number}/`)
      .then(gameGeneration => dispatch(changeGameGeneration(gameGeneration)));
  }

  return (
    <nav>
      <h2 className="text-center mb-4">Select the Pokémon game generation you want to view more details:</h2>
      <ul className="d-flex flex-wrap justify-content-center p-0">
        <li><button className={activeItem === 1 ? "active-item" : ""} onClick={() => {navClick(1)}}>1</button></li>
        <li><button className={activeItem === 2 ? "active-item" : ""} onClick={() => {navClick(2)}}>2</button></li>
        <li><button className={activeItem === 3 ? "active-item" : ""} onClick={() => {navClick(3)}}>3</button></li>
        <li><button className={activeItem === 4 ? "active-item" : ""} onClick={() => {navClick(4)}}>4</button></li>
        <li><button className={activeItem === 5 ? "active-item" : ""} onClick={() => {navClick(5)}}>5</button></li>
        <li><button className={activeItem === 6 ? "active-item" : ""} onClick={() => {navClick(6)}}>6</button></li>
        <li><button className={activeItem === 7 ? "active-item" : ""} onClick={() => {navClick(7)}}>7</button></li>
      </ul>
    </nav>
  )
}