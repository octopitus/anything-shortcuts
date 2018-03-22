// @flow
import React, {Component} from 'preact'

import {startWorkers, getWorkers} from '../workers'

import SearchInput from './SearchInput'
import ShortcutSectionList from './ShortcutSectionList'

if ((module: any).hot) require('preact/debug')

startWorkers()

type State = {
  loaded: boolean,
  pattern: string,
  application: string
}

class App extends Component<*, State> {
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

  _handleOnChange = (pattern: string): void => {
    this.setState({pattern})
  }

  render(props: *, state: State) {
    if (!this.state.loaded) {
      return null
    }

    return (
      <div id="app">
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
