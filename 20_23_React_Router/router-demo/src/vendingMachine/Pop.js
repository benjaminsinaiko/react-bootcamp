import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'
import popImg from './Pop.png'
import './Pop.css'

class Pop extends Component {
  render() {
    return (
      <div className="Pop">
        <img src={popImg} alt="Can of pop" />

        <Message>
          <h1>Pop</h1>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    )
  }
}

export default Pop
