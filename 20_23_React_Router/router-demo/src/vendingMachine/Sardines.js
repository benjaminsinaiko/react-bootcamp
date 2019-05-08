import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sardines.css'

class Sardines extends Component {
  render() {
    return (
      <div
        className="Sardines"
        style={{
          backgroundImage:
            'url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)'
        }}>
        <h1>Sardines</h1>
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}

export default Sardines
