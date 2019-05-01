import React, { Component } from 'react'
import './App.css'

import Timer from './timer/Timer'

import GithubUserInfo from './githubUser/GithubUserInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />

        {/* <GithubUserInfo username="Elie" /> */}
      </div>
    )
  }
}

export default App
