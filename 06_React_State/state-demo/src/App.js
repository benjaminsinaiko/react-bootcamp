import React, { Component } from 'react'
import './App.css'

import Game from './stateIntro/Game'
import Demo from './stateIntro/Demo'
import Button from './stateIntro/Button'
import BrokenClick from './stateIntro/BrokenClick'
import Rando from './stateIntro/Rando'
import Clicker from './stateIntro/Clicker'

import RollDice from './diceExercise/RollDice'

import ScoreKeeper from './statePatterns/ScoreKeeper'
import IconList from './statePatterns/IconList'

import Lottery from './lottery/Lottery'

import CoinFlip from './coinFlip/MyCoinFlip'
import CoinContainer from './coinFlip/CoinContainer'

import BoxesContainer from './colorBoxes/BoxesContainer'

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

        {/* <ScoreKeeper />
        <IconList /> */}

        {/* <Lottery />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} /> */}

        {/* <CoinFlip />
        <hr />
        <CoinContainer /> */}

        <BoxesContainer />
      </div>
    )
  }
}

export default App
