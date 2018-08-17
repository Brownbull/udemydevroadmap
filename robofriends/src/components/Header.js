// Splitting 1
import React, { Component } from 'react'
// Splitting 6
import CounterButton from './CounterButton'

class Header extends Component {
  // Splitting 4
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    console.log('Header')
    return (
      <div>
        <h1 className="f1">Robofriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  } // eof render
}

export default Header