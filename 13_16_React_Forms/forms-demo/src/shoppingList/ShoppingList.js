import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'

export default class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { name: 'Milk', qty: '2 gallons' },
        { name: 'Bread', qty: '2 loaves' }
      ]
    }
  }
  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    console.log('list', this.state)
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    )
  }
}
