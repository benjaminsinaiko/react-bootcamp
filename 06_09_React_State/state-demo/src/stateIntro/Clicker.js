import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = { num: 0, isWinner: false }
  }
  getRandom = () => {
    let rand = Math.floor(Math.random() * 10) + 1
    this.setState({ num: rand, isWinner: rand === 7 })
  }
  render() {
    let btn
    if (this.state.isWinner !== true) {
      btn = <button onClick={this.getRandom}>Random Number</button>
    } else {
      btn = <h2>YOU WIN!</h2>
    }
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {btn}
      </div>
    )
  }
}
export default Clicker
