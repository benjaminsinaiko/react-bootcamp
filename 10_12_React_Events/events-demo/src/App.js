import React from 'react'
import './App.css'

import ButtonList from './buttonList/ButtonList'

import NumberList from './numberList/NumberList'
import BetterNumberList from './numberList/BetterNumberList'

function App() {
  return (
    <div className="App">
      <ButtonList />

      <NumberList />
      <BetterNumberList />
    </div>
  )
}

export default App
