import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
// ReduxSetup 8 19
import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'

// ReduxSetup 10
const mapStateToProps = state => {
  return {
    // ReduxSetup 18 10 from reducers.js
    searchField: state.searchRobots.searchField,
    // ReduxSetup 19
    robots: state.requestRobots.searchField,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// ReduxSetup 11
const mapDispatchToProps = (dispatch) => {
  // ReduxSetup 11 from actions.js
  return {
    changeSearch: (event) => dispatch(setSearchField(event.target.value)),
    // ReduxSetup 19
    filterRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    // ReduxSetup 20
    this.props.filterRobots()
  }

  render() {
    // ReduxSetup 20 12 set variables from this.props
    const { searchField, changeSearch, robots, isPending, error } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    // ReduxSetup 21
    if (isPending) {
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
