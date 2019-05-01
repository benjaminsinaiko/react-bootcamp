import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../loader/Loader'

class ZenQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      isLoaded: false
    }
  }
  componentDidMount() {
    // load data
    axios.get('https://api.github.com/zen').then(res => {
      setTimeout(() => {
        this.setState({ quote: res.data, isLoaded: true })
      }, 2000)
    })
    // set state with that data
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>

            <p>{this.state.quote}</p>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

export default ZenQuote
