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
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false
    }
    this.seenJokes = new Set(this.state.jokes.map(j => j.id))
  }
  async componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes()
  }

  handleClick = () => {
    this.setState({ loading: true }, this.getJokes)
  }
  getJokes = async () => {
    try {
      let jokes = []
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get(JOKES_API, {
          headers: { Accept: 'application/json' }
        })
        let newJoke = res.data
        if (!this.seenJokes.has(newJoke.id)) {
          jokes.push({ id: newJoke.id, text: newJoke.joke, votes: 0 })
          this.seenJokes.add(newJoke.id)
        } else {
          console.log('FOUND A DUPLICATE!')
          console.log(newJoke.id)
        }
      }
      this.setState(
        st => ({
          loading: false,
          jokes: [...st.jokes, ...jokes]
        }),
        () =>
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      )
    } catch (e) {
      alert(e)
      this.setState({ loading: false })
    }
  }
  handleVote = (id, delta) => {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        )
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      )
    }

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
          <button className="JokeList-getmore" onClick={this.handleClick}>
            New Jokes
          </button>
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
