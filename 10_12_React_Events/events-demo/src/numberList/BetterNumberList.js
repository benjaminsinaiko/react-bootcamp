import React, { Component } from 'react'
import BetterNumberItem from './BetterNumberItem'

export default class BetterNumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [6, 7, 8, 9, 10]
    }
  }

  remove = num => {
    this.setState(prevState => ({
      nums: prevState.nums.filter(n => n !== num)
    }))
  }

  render() {
    let nums = this.state.nums.map((n, i) => (
      <BetterNumberItem key={i} value={n} remove={this.remove} />
    ))
    return (
      <div style={{ textAlign: 'left' }}>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}
