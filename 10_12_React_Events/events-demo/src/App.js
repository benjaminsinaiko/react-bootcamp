import React from 'react'
import './App.css'

import ButtonList from './buttonList/ButtonList'

import NumberList from './numberList/NumberList'
import BetterNumberList from './numberList/BetterNumberList'

import Hangman from './hangman/Hangman'

function App() {
  return (
    <div className="App">
      {/* <ButtonList /> */}

      {/* <NumberList />
      <BetterNumberList /> */}

      <Hangman />
    </div>
  )
}

export default App
