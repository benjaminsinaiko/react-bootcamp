import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/'

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: []
    }
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}new/shuffle/`)
    this.setState({ deck: deck.data })
  }
  getCard = async () => {
    let deck_id = this.state.deck.deck_id
    try {
      // make request using deck id
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`
      let cardRes = await axios.get(cardUrl)
      if (!cardRes.data.success) {
        throw new Error('No cards remaining!')
      }
      let card = cardRes.data.cards[0]

      // set state using new card info
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }))
    } catch (err) {
      alert(err)
    }
  }

  render() {
    const cards = this.state.drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ))

    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card</button>
        {cards}
      </div>
    )
  }
}

export default Deck
