import React, { Component } from 'react'
import _ from 'lodash'
import cards from './cards.json'

window.cards = cards

class Card extends Component {
  state = {
    revealed: false
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleNext = () => {
    if (this.state.revealed) {
      this.setState({ revealed: false })
      this.props.next()
    } else {
      this.setState({ revealed: true })
    }
  }

  handleKeyUp = event => {
    if (event.keyCode === 32) this.handleNext()
  }

  render() {
    const card_number = parseInt(this.props.match.params.card_number, 10)
    const { card_title, card_type, front_image } = _.find(cards, { card_number })
    return (
      <div className="card-container">
        <div onClick={this.handleNext} className={`card ${this.state.revealed && 'revealed'} ${card_type}`}>
          <h3>{card_title}</h3>
          <figure className="preview" style={{ backgroundImage: `url(${front_image})` }} />
          <figure className="front">
            <img src={front_image} alt="" height="420" width="300" />
          </figure>
        </div>
      </div>
    )
  }
}

export default Card
