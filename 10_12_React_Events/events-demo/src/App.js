import React from 'react'
import './App.css'

import ButtonList from './buttonList/ButtonList'

import NumberList from './numberList/NumberList'
import BetterNumberList from './numberList/BetterNumberList'

import Hangman from './hangman/Hangman'

import Board from './lightsOut/Board'

function App() {
  return (
    <div className="App">
      {/* <ButtonList /> */}

      {/* <NumberList />
      <BetterNumberList /> */}

      {/* <Hangman /> */}

      <Board />
    </div>
  )
}

export default App
