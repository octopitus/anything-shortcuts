import React, {Component} from 'preact'

import {startWorkers, getWorkers} from '../workers'

import Header from './Header'
import SearchInput from './SearchInput'
import ShortcutSectionList from './ShortcutSectionList'

if (module.hot) require('preact/debug')

startWorkers()

class App extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    const workers = getWorkers()

    workers.database
      .initShortcutsTable()
      .then(workers.database.getAllShortcuts)
      .then(workers.search.addAll)
      .then(() => this.setState({loaded: true}))
  }

  _handleOnChange = pattern => {
    this.setState({pattern})
  }

  render(props, state) {
    if (!this.state.loaded) {
      return null
    }

    return (
      <div id="app">
        <Header />
        <SearchInput value={state.pattern} onChange={this._handleOnChange} />
        <ShortcutSectionList
          pattern={state.pattern}
          application={state.application}
        />
      </div>
    )
  }
}

export default App
