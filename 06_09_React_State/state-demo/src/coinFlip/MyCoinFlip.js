import React, { Component } from 'react'
import Coin from './MyCoin'
import './CoinFlip.css'

class CoinFlip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flips: []
    }
  }
  flip = () => {
    let newFlip = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      flips: [...prevState.flips, newFlip]
    }))
  }
  handleClick = () => {
    this.flip()
  }

  render() {
    let { flips } = this.state
    let currentFlip = flips[flips.length - 1]
    let heads, tails
    if (flips.length) {
      heads = flips.reduce((h, val) => {
        return h + (val === 0)
      }, 0)
      tails = flips.reduce((t, val) => {
        return t + (val === 1)
      }, 0)
    }
    return (
      <div className="CoinFlip">
        <h1>Let's flip a coin!</h1>
        <Coin side={currentFlip || 0} />
        <button onClick={this.handleClick}>Flip</button>
        <p>
          Out of {flips.length} flips, there have been {heads || 0} heads and{' '}
          {tails || 0} tails.
        </p>
      </div>
    )
  }
}

export default CoinFlip
