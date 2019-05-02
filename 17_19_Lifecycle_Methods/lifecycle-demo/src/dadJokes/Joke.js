import React, { Component } from 'react'
import './Joke.css'

export default class Joke extends Component {
  handleUpvote = () => {
    this.props.upvote(this.props.id, 1)
  }
  handleDownvote = () => {
    this.props.downvote(this.props.id, -1)
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.handleUpvote} />
          <span>{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.handleDownvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
      </div>
    )
  }
}
