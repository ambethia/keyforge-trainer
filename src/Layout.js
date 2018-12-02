import React from 'react'

const Layout = props => (
  <>
    {props.children}
    <footer>
      <p>
        The project is <a href="https://github.com/ambethia/keyforge-trainer">open source</a>. All content is &copy;
        2018 Fantasy Flight Games.
      </p>
    </footer>
  </>
)

export default Layout
