// ReduxSetup 3 16
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

// ReduxSetup 1
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// ReduxSetup 16 19 high order function
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((elements) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: elements }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}


