import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((robots) => this.setState({ robots: robots }))
    .catch(() => console.log("something went wrong"))
  }

  changeSearch = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="App tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox changeSearch={this.changeSearch} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      ) // eof return
    } // eof if
  } // eof render
} // eof class App 

export default App
