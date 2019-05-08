import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import VendingMachine from './vendingMachine/VendingMachine'
import Chips from './vendingMachine/Chips'
import Sardines from './vendingMachine/Sardines'
import Pop from './vendingMachine/Pop'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/pop" component={Pop} />
          <Route exact path="/sardines" component={Sardines} />
          <Route exact path="/chips" component={Chips} />
        </Switch>
      </div>
    )
  }
}

export default App
