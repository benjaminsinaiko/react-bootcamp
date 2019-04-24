import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
  static defaultProps = {
    coin: [
      'https://d1rcylxe0mqwrt.cloudfront.net/cdn-1537997109859/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prod-19_50GABRAW-2019-_50-gold-american-buffalo-coin-obverse-650x650.jpg',

      'https://d1rcylxe0mqwrt.cloudfront.net/cdn-1537997109859/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/p/r/prod-CD_50GABRAW-1oz-50-gold-american-buffalo-reverse.jpg.jpg'
    ]
  }
  render() {
    return (
      <div className="Coin">
        <img src={this.props.coin[`${this.props.side}`]} alt="coin" />
      </div>
    )
  }
}

export default Coin
