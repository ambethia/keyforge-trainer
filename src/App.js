import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import _ from 'lodash'
import Card from './Card'
import Splash from './Splash'
import Search from './Search'
import history from './history'
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
    const nextPosition = position + 1
    if (nextPosition < CARDS.length) {
      this.setState({ position: nextPosition }, () => {
        history.push(`/${CARDS[nextPosition].card_number}`)
        this.preload()
      })
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
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={props => <Splash {...props} next={this.next} />} />
          <Route path="/search" component={Search} />} />
          <Route path="/:card_number" render={props => <Card {...props} next={this.next} />} />
        </Switch>
      </Router>
    )
  }
}

export default App
