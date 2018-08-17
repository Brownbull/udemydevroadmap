import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'
// Splitting 3
import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (event) => dispatch(setSearchField(event.target.value)),
    filterRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.filterRobots()
  }

  render() {
    const { searchField, changeSearch, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (isPending) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="App tc">
          {/* Splitting 2 */}
          <Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
