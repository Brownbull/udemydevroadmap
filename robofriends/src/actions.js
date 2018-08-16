// ReduxSetup 3
import { CHANGE_SEARCH_FIELD } from './constants'

// ReduxSetup 1
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

