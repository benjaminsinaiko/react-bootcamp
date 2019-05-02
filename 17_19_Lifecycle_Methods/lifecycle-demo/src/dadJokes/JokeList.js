import React, { Component } from 'react'
import axios from 'axios'
import Joke from './Joke'
import './JokeList.css'

const JOKES_API = 'https://icanhazdadjoke.com/'

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }
  async componentDidMount() {
    // load jokes
    let jokes = []
    console.time('get jokes')
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get(JOKES_API, {
        headers: { Accept: 'application/json' }
      })
      jokes.push({ id: res.data.id, text: res.data.joke, votes: 0 })
    }
    console.timeEnd('get jokes')
    this.setState({ jokes })
  }

  handleVote = (id, delta) => {
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }))
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="face with tears of joy"
          />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <h1 className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke
              key={j.id}
              id={j.id}
              text={j.text}
              votes={j.votes}
              upvote={this.handleVote}
              downvote={this.handleVote}
            />
          ))}
        </h1>
      </div>
    )
  }
}
