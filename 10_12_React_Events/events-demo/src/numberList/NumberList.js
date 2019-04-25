import React, { Component } from 'react'
import NumberItem from './NumberItem'

export default class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = { nums: [1, 2, 3, 4, 5] }
  }

  remove = num => {
    this.setState(prevState => ({
      nums: prevState.nums.filter(n => n !== num)
    }))
  }

  render() {
    let nums = this.state.nums.map((n, i) => (
      <NumberItem key={i} value={n} remove={() => this.remove(n)} />
    ))
    return (
      <div style={{ textAlign: 'left' }}>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}
