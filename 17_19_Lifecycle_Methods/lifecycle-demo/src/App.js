import React, { Component } from 'react'
import './App.css'

// import Timer from './timer/Timer'
// import ZenQuotes from './zenQuote/ZenQuote'
// import GithubUserInfo from './githubUser/GithubUserInfo'
// import Deck from './deckOfCards/Deck'
import DadJokes from './dadJokes/JokeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timer /> */}
        {/* <ZenQuotes /> */}
        {/* <GithubUserInfo username="Elie" /> */}
        {/* <Deck /> */}
        <DadJokes />
      </div>
    )
  }
}

export default App
