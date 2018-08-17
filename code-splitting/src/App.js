import React, { Component } from 'react'
import './App.css'
import Page1 from './components/page1'

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'page1',
      // RoadMap 2
      component: ''
    }
  }

  onRouteChange = (route) => {
    // RoadMap 3
    if(route === 'page1') {
      this.setState({ route: route })
    } else if(route === 'page2') {
      import('./components/page2')
      .then((page) => {
        this.setState({ route: route, component: page.default })
      })
    } else if (route === 'page3') {
      import('./components/page3')
      .then((page) => {
        this.setState({ route: route, component: page.default })
      })
    }
  }

  render() {
  //   const { route } = this.state
  //   if (route === 'page1'){
  //     return <Page1 onRouteChange={this.onRouteChange} />
  //   } else if (route === 'page2') {
  //     return <Page2 onRouteChange={this.onRouteChange} />
  //   } else if (route === 'page3') {
  //     return <Page3 onRouteChange={this.onRouteChange} />
  //   }
  
  // RoadMap 1
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange={this.onRouteChange}/>
    }
  } // eof render
} // eof class App 

export default App
