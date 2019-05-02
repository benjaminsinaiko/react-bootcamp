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
        <h1 className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </h1>
      </div>
    )
  }
}
