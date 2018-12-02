import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

const Splash = props => (
  <Layout>
    <section className="hero">
      <p>
        A <strong>Keyforge Trainer</strong> to practice learning cards by name and image.
      </p>
      <button className="button" onClick={props.next}>
        Begin
      </button>
      <p>
        Also, <Link to="/search">search</Link>.
      </p>
    </section>
  </Layout>
)

export default Splash
