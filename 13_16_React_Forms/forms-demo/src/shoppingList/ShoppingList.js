import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'
import uuid from 'uuid/v4'

export default class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { name: 'Milk', qty: '2 gallons', id: uuid() },
        { name: 'Bread', qty: '2 loaves', id: uuid() }
      ]
    }
  }
  addItem = item => {
    let newItem = { ...item, id: uuid() }
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }))
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
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
