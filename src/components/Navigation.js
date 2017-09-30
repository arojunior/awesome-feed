import React from 'react'
import { Link } from 'react-router'

const styles = {
  link: {
    display: 'inline-block',
    margin: '0.5em'
  }
}

const Navigation = () => (
  <nav>
      <Link to='/' style={ styles.link }>Home</Link>
      <Link to='/about' style={ styles.link }>About</Link>
  </nav>
)

export default Navigation
