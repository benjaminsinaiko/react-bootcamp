import React, { Component } from 'react'
import axios from 'axios'

class GithubUserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    console.log('INSIDE CONSTRUCTOR')
  }
  //async version
  async componentDidMount() {
    console.log('INSIDE COMPONENT DID MOUNT')
    const url = `https://api.github.com/users/${this.props.username}`
    let response = await axios.get(url)
    let user = response.data
    this.setState({ user })
  }
  componentDidUpdate() {
    console.log('INSIDE COMPONENT DID UPDATE')
  }

  render() {
    console.log('INSIDE RENDER')
    const { name, bio, avatar_url, location } = this.state.user
    return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <img src={avatar_url} alt="Profile pic" />
        <p>{location}</p>
      </div>
    )
  }
}

export default GithubUserInfo
