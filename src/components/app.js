// @flow
import React, {Component} from 'preact'

import {startWorkers, getWorkers} from '../workers'

import SearchInput from './SearchInput'
import ShortcutSectionList from './ShortcutSectionList'

if ((module: any).hot) require('preact/debug')

startWorkers()

class App extends Component {
  componentDidMount() {
    const workers = getWorkers()

    workers.database
      .initShortcutsTable()
      .then(workers.database.getAllShortcuts)
      .then(workers.search.addAll)
  }

  render() {
    return (
      <div id="app">
        <SearchInput />
        <ShortcutSectionList />
      </div>
    )
  }
}

export default App
