import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
// ReduxSetup 8
import { setSearchField } from '../actions'
import { connect } from 'react-redux'

// ReduxSetup 10
const mapStateToProps = state => {
  return {
    // ReduxSetup 10 from reducers.js
    searchField: state.searchField
  }
}

// ReduxSetup 11
const mapDispatchToProps = (dispatch) => {
  // ReduxSetup 11 from actions.js
  return {
    changeSearch: (event) => dispatch(setSearchField(event.target.value))
  }
}


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((robots) => this.setState({ robots: robots }))
    .catch(() => console.log("something went wrong"))
  }

  render() {
    const { robots } = this.state
    // ReduxSetup 12 set variables from this.props
    const { searchField, changeSearch } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="App tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox changeSearch={changeSearch} />
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

// ReduxSetup 9 high order function, connect return another function
export default connect(mapStateToProps, mapDispatchToProps)(App)
