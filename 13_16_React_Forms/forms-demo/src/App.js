import React from 'react'
import './App.css'

import FormsIntro from './formsIntro/FormsIntro'
import MultipleForms from './formsIntro/MultipleForms'

import ShoppingList from './shoppingList/ShoppingList'

function App() {
  return (
    <div className="App">
      {/* <FormsIntro />
      <MultipleForms /> */}

      <ShoppingList />
    </div>
  )
}

export default App
