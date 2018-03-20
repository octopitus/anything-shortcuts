/* store.js */
import createStore from 'redux-zero'

const initialState = {
  applications: JSON.parse(localStorage.getItem('applications')),
  search: {pattern: '', application: null}
}

export default createStore(initialState)
