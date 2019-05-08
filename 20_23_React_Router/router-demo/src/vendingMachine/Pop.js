import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import popImg from './Pop.png'
import './Pop.css'

class Pop extends Component {
  render() {
    return (
      <div className="Pop">
        <img src={popImg} alt="Can of pop" />
      </div>
    )
  }
}

export default Pop
