import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
// ReactTest 2
import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper

beforeEach(() => {
  const mockProps = {
    requestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPendinf: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('MainPage component Snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})

it('MainPage component filter robots', () => {
  const mockProps2 = {
    requestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jahn',
      email: 'john@email.com'
    }],
    searchField: 'a',
    isPendinf: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'Jahn',
    email: 'john@email.com'
  }])
})

it('MainPage component filter robots 2', () => {
  const mockProps3 = {
    requestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@email.com'
    }],
    searchField: 'a',
    isPendinf: false
  }
  const fR = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual(fR)
})

