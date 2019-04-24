import React, { Component } from 'react'
import './App.css'

import Game from './stateIntro/Game'
import Demo from './stateIntro/Demo'
import Button from './stateIntro/Button'
import BrokenClick from './stateIntro/BrokenClick'
import Rando from './stateIntro/Rando'
import Clicker from './stateIntro/Clicker'

import RollDice from './diceExercise/RollDice'

import ScoreKeeper from './state-patterns/ScoreKeeper'
import IconList from './state-patterns/IconList'

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

        {/* <RollDice face="five" /> */}

        <ScoreKeeper />
        <IconList />
      </div>
    )
  }
}

export default App
