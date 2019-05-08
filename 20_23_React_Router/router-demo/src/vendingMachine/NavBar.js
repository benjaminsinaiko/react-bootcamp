import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">
          Chips
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/pop">
          Pop
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/sardines">
          Sardines
        </NavLink>
      </div>
    )
  }
}

export default NavBar
