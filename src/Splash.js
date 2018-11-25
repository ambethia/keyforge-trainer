import React from 'react'

const Splash = props => (
  <div className="splash">
    <section className="hero">
      <p>
        A <strong>Keyforge Trainer</strong> to practice learning cards by name and image.
      </p>
      <button className="button" onClick={props.next}>
        Begin
      </button>
    </section>
    <footer>
      <p>
        The project is <a href="https://github.com/ambethia/keyforge-trainer">open source</a>. All content is &copy;
        2018 Fantasy Flight Games.
      </p>
    </footer>
  </div>
)

export default Splash
