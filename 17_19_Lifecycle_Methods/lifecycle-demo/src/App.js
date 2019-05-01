import React, { Component } from 'react'
import './App.css'

// import Timer from './timer/Timer'
// import ZenQuotes from './zenQuote/ZenQuote'
// import GithubUserInfo from './githubUser/GithubUserInfo'
import Deck from './deckOfCards/Deck'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timer /> */}
        {/* <ZenQuotes /> */}
        {/* <GithubUserInfo username="Elie" /> */}
        <Deck />
      </div>
    )
  }
}

export default App
