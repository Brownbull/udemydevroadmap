import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    } // eof this.state
  } // eof constructor

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError){
      return <h1>Error boundry Catch!</h1>
    }
    return this.props.children
  }
} // eof 


export default ErrorBoundry
