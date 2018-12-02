import React from 'react'
import _ from 'lodash'
import CARDS from './cards.json'
import Layout from './Layout'

const HOUSES = _.uniq(_.map(CARDS, c => c.house)).sort()
const RARITIES = _.uniq(_.map(CARDS, c => c.rarity)).sort()
const TYPES = _.uniq(_.map(CARDS, c => c.card_type)).sort()
const TRAITS = _.uniq(_.flatMap(CARDS, c => c.traits)).sort()

const DEFAULT_STATE = {
  card_title: '',
  card_text: '',
  card_type: '',
  flavor_text: '',
  house: '',
  rarity: '',
  traits: '',
  amberMin: '0',
  amberMax: '4',
  armorMin: '0',
  armorMax: '2',
  powerMin: '0',
  powerMax: '12'
}

class Search extends React.Component {
  state = DEFAULT_STATE

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  reset = () => {
    this.setState(DEFAULT_STATE)
  }

  filteredCards() {
    const query = property => card =>
      this.state[property] ? (card[property] || '').toLowerCase().includes(this.state[property].toLowerCase()) : true
    const match = property => card => (this.state[property] ? card[property] === this.state[property] : true)
    const include = property => card => (this.state[property] ? card[property].includes(this.state[property]) : true)
    const min = property => card => card[property] >= this.state[property + 'Min']
    const max = property => card => card[property] <= this.state[property + 'Max']

    return _.chain(Object.values(CARDS))
      .filter(query('card_title'))
      .filter(query('card_text'))
      .filter(match('card_type'))
      .filter(query('flavor_text'))
      .filter(match('house'))
      .filter(match('rarity'))
      .filter(include('traits'))
      .filter(min('amber'))
      .filter(max('amber'))
      .filter(min('armor'))
      .filter(max('armor'))
      .filter(min('power'))
      .filter(max('power'))
      .value()
  }

  render() {
    const cards = this.filteredCards()
    return (
      <Layout>
        <div className="search">
          <h2>Search</h2>

          <p>
            <label>Title</label>
            <input
              type="text"
              name="card_title"
              value={this.state.card_title}
              onChange={this._change}
              placeholder="E.g. &ldquo;Ancient Bear&rdquo;"
            />
          </p>
          <p>
            <label>Text</label>
            <input
              type="text"
              name="card_text"
              value={this.state.card_text}
              onChange={this._change}
              placeholder="E.g., &ldquo;purge&rdquo;"
            />
          </p>
          <p>
            <label>Type</label>
            <select name="card_type" value={this.state.card_type} onChange={this._change}>
              <option value="">Any</option>
              {TYPES.map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>Flavor</label>
            <input
              type="text"
              name="flavor_text"
              value={this.state.flavor_text}
              onChange={this._change}
              placeholder="E.g., &ldquo;Captain Val Jericho&rdquo;"
            />
          </p>
          <p>
            <label>House</label>
            <select name="house" value={this.state.house} onChange={this._change}>
              <option value="">Any</option>
              {HOUSES.map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>Rarity</label>
            <select name="rarity" value={this.state.rarity} onChange={this._change}>
              <option value="">Any</option>
              {RARITIES.map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>Trait</label>
            <select name="traits" value={this.state.traits} onChange={this._change}>
              <option value="">Any</option>
              {TRAITS.map(n => (
                <option value={n} key={n}>
                  {n}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label>&#198;mber</label>
            <select name="amberMin" value={this.state.amberMin} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            &ndash;
            <select name="amberMax" value={this.state.amberMax} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <label>Power</label>
            <select name="powerMin" value={this.state.powerMin} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            &ndash;
            <select name="powerMax" value={this.state.powerMax} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </p>
          <p>
            <label>Armor</label>
            <select name="armorMin" value={this.state.armorMin} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            &ndash;
            <select name="armorMax" value={this.state.armorMax} onChange={this._change}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </p>
          <button onClick={this.reset}>Reset</button>
          <h2>Results</h2>
          {_.isEqual(DEFAULT_STATE, this.state) ? (
            <p>Choose a filter.</p>
          ) : (
            <>
              <p>{cards.length} Matches.</p>
              <ul className="card-list">
                {cards.map(c => (
                  <li key={c.id}>
                    <img src={c.front_image} alt={c.card_title} height="420" width="300" />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Layout>
    )
  }
}

export default Search
