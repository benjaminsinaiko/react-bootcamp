import React, { Component } from 'react'
import axios from 'axios'
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
      jokes.push(res.data.joke)
    }
    console.timeEnd('get jokes')
    this.setState({ jokes })
    console.log(this.state.jokes)
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
            <div>{j}</div>
          ))}
        </h1>
      </div>
    )
  }
}
