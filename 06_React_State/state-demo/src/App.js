import React, { Component } from 'react'
import Game from './stateIntro/Game'
import Demo from './stateIntro/Demo'
import Button from './stateIntro/Button'
import BrokenClick from './stateIntro/BrokenClick'
import Rando from './stateIntro/Rando'
import Clicker from './stateIntro/Clicker'
import './App.css'

import RollDice from './diceExercise/RollDice'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game />
        <Demo animal="Bobcat" food="Pineapple" />
        <Button />
        <BrokenClick />
        <Rando maxNum={10} />
        <Clicker /> */}

        <RollDice face="five" />
      </div>
    )
  }
}

export default App
