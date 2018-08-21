import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
// ReactTest 2
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Card from './Card'
import CardList from './CardList'
import CounterButton from './CounterButton'
import ErrorBoundry from './ErrorBoundry'
import Header from './Header'
import Scroll from './Scroll'
import SearchBox from './SearchBox'

// it('expect to render Card component', () =>{
//   expect(shallow(<Card />).length).toEqual(1)
// })
// let wrapper

// beforeEach(() => {
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [],
//     searchField: '',
//     isPendinf: false
//   } 
//   wrapper = shallow(<MainPage { ...mockProps }/>)
// })

// ReactTest 3
it('Card component Snapshot', () => {
  // Snapshot will take a photo of the current component 
  // and from here compare it against future versions
  // To update snapshot just change ocmponent and use option u on test menu
  expect(shallow(<Card />)).toMatchSnapshot()
})

// ReactTest 4
it('CardList component Snapshot', () => {
  const MockRobots = [
    {
      id: 99,
      name: 'John Snow',
      email: 'john@goth.com'
    }
  ]
  expect(shallow(<CardList robots={MockRobots} />)).toMatchSnapshot()
})

it('SearchBox component Snapshot', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot()
})

it('Scroll component Snapshot', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot()
})

// ReactTest 5
it('CounterButton component Snapshot: Change Color', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('CounterButton component Snapshot: Increment counter', () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />)
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })
  wrapper.find('[id="counter"]').simulate('keypress')
  expect(wrapper.state()).toEqual({ count: 2 })
  expect(wrapper.props().color).toEqual('red')
})

it('ErrorBoundry component Snapshot', () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
})

it('Header component Snapshot', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})

