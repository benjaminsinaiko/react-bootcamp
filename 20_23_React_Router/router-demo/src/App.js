import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

// import NavBar from './vendingMachine/NavBar'
// import VendingMachine from './vendingMachine/VendingMachine'
// import Chips from './vendingMachine/Chips'
// import Sardines from './vendingMachine/Sardines'
// import Pop from './vendingMachine/Pop'

import Food from './routerPatterns/Food'
import Meal from './routerPatterns/Meal'
import FoodSearch from './routerPatterns/FoodSearch'
import Navbar from './routerPatterns/Navbar'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/pop" component={Pop} />
          <Route exact path="/sardines" component={Sardines} />
          <Route exact path="/chips" component={Chips} />
        </Switch> */}

        <Navbar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={routerProps => <Food {...routerProps} />}
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          {/* <Route
            exact
            path='/'
            render={routeProps => <FoodSearch {...routeProps}/>}
          /> */}
          <Route exact path="/" component={FoodSearch} />
          <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
