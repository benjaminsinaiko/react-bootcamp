import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import vendingMachingeImg from './VendingMachine.png'
import './VendingMachine.css'

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachingeImg})` }}>
        <h1>I'm a vending machine. What would you like to eat?</h1>
        <Link exact to="/pop">
          Pop
        </Link>
        <Link exact to="/chips">
          Chips
        </Link>
        <Link exact to="/sardines">
          Sardines
        </Link>
      </div>
    )
  }
}

export default VendingMachine
