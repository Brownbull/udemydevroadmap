import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import Header from '../components/Header'
import './MainPage.css'

class MainPage extends Component {
  componentDidMount() {
    this.props.requestRobots()
  }

  filterRobots = robots => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })
  }

  render() {
    const { changeSearch, robots, isPending } = this.props
    if (isPending) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="MainPage tc">
          <Header />
          <SearchBox changeSearch={changeSearch} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      ) // eof return
    } // eof if
  } // eof render
} // eof class MainPage 

export default MainPage
