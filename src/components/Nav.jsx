import React from 'react'
import { useStateContext } from "../state/Context";
import { changeGameGeneration } from "../state/Actions";
import { doGetRequest } from '../helpers/apiHelper'

export default function Nav() {
  
  const [, dispatch] = useStateContext();

  function navClick(number) {
    doGetRequest(`/generation/${number}/`)
      .then(gameGeneration => dispatch(changeGameGeneration(gameGeneration)));
  }

  return (
    <nav>
      <ul className="d-flex justify-content-center p-0">
        <li><button onClick={() => {navClick(1)}}>1</button></li>
        <li><button onClick={() => {navClick(2)}}>2</button></li>
        <li><button onClick={() => {navClick(3)}}>3</button></li>
        <li><button onClick={() => {navClick(4)}}>4</button></li>
        <li><button onClick={() => {navClick(5)}}>5</button></li>
        <li><button onClick={() => {navClick(6)}}>6</button></li>
        <li><button onClick={() => {navClick(7)}}>7</button></li>
      </ul>
    </nav>
  )
}