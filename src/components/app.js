// @flow
import React, { Component } from 'preact'

// $FlowFixMe
import { getWorkers } from '../workers'

import Header from './Header'
import SearchContentWrapper from './SearchContentWrapper'

if ((module: any).hot) {
	require('preact/debug')
}

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
				<Header />
				<SearchContentWrapper />
			</div>
		)
	}
}

export default App
