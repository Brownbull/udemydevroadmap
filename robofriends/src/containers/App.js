import React, { Component } from 'react'
import MainPage from '../components/MainPage'
import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'
import './App.css'

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
    requestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return (
      <MainPage { ...this.props }/>
    )
  } // eof render
} // eof class App 

export default connect(mapStateToProps, mapDispatchToProps)(App)
