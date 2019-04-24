import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers'
import './CoinFlip.css'

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgSrc:
          'https://d1rcylxe0mqwrt.cloudfront.net/cdn-1537997109859/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prod-19_50GABRAW-2019-_50-gold-american-buffalo-coin-obverse-650x650.jpg'
      },
      {
        side: 'tails',
        imgSrc:
          'https://d1rcylxe0mqwrt.cloudfront.net/cdn-1537997109859/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/p/r/prod-CD_50GABRAW-1oz-50-gold-american-buffalo-reverse.jpg.jpg'
      }
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
  }
  flipCoin = () => {
    const newCoin = choice(this.props.coins)
    this.setState(prevState => {
      return {
        currCoin: newCoin,
        nFlips: prevState.nFlips + 1,
        nHeads: prevState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: prevState.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }
  handleClick = () => {
    this.flipCoin()
  }

  render() {
    return (
      <div className="CoinFlip">
        <h2>Let's Flip A Coin!</h2>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    )
  }
}
