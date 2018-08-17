// RoadMap 4
import React, { Component } from 'react'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
        component: null
      }
    } // eof constructor
    
    async componentDidmount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      })
    }

    render() {
      const Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  } // eof class AsyncComponent

  return AsyncComponent
} // eof export default function asyncComponent