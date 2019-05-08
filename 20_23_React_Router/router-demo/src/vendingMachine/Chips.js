import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'
import './Chips.css'
import chipsImg from './Chips.png'

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <img src={chipsImg} alt="Bag of chips" />
        <Message>
          <h1>Chips</h1>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    )
  }
}

export default Chips
