import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Chips.css'
import chipsImg from './Chips.png'

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Chips</h1>
        <img src={chipsImg} alt="Bag of chips" />
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}

export default Chips
