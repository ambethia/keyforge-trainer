import React, { Component } from 'react'
import _ from 'lodash'
import Card from './Card'
import cards from './cards.json'

const CARDS = _.shuffle(cards)

class App extends Component {
  state = {
    position: 0
  }

  componentDidMount() {
    this.preload()
  }

  next = () => {
    const { position } = this.state
    if (position < CARDS.length) {
      this.setState({ position: position + 1 }, this.preload)
    }
  }

  preload = () => {
    const nextPosition = this.state.position + 1
    if (nextPosition < CARDS.length) {
      const img = new Image()
      img.src = CARDS[nextPosition].front_image
    }
  }

  render() {
    const { position } = this.state
    return (
      <>
        <Card {...CARDS[position]} next={this.next} />
        <footer>
          <p>
            A <strong>Keyforge Trainer</strong> to practice learning cards by name and image.
            <em>Click or tap space to advance.</em>
            <br />
            The project is <a href="https://github.com/ambethia/keyforge-trainer">open source</a>. All content is &copy;
            2018 Fantasy Flight Games.
          </p>
        </footer>
      </>
    )
  }
}

export default App
