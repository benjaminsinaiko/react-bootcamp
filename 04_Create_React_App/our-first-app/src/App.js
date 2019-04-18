import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import pickFruits from './fruits'

class App extends Component {
  render() {
    // // import/export exercise
    // helpful()
    // sort()
    // sing()

    // fruits exercise
    pickFruits()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>I have edited it!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
