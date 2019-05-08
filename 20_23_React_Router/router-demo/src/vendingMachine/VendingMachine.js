import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import vendingMachingeImg from './VendingMachine.png'
import Message from './Message'
import './VendingMachine.css'

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachingeImg})` }}>
        <Message>
          <h1>I'm a vending machine. What would you like to eat?</h1>
        </Message>
        <Message>
          <Link exact to="/pop">
            Pop
          </Link>
          <Link exact to="/chips">
            Chips
          </Link>
          <Link exact to="/sardines">
            Sardines
          </Link>
        </Message>
      </div>
    )
  }
}

export default VendingMachine
