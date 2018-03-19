//@flow
import React, { Component } from 'preact'

// $FlowFixMe
import { getWorkers } from '../../workers'

import SearchInput from './SearchInput'
import ShortcutList from './ShortcutList'

type Props = {
	//
}

type State = {
	searchTerm: string,
	items: Array<*>
}

class SearchContentWrapper extends Component<Props, State> {
	state = {
		searchTerm: '',
		items: []
	}

	_handleOnChange = (value: string): void => {
		this.setState({ searchTerm: value })

		getWorkers()
			.search.search(value)
			.then(items => this.setState({ items }))
	}

	render(props: Props, state: State) {
		return (
			<div class="container">
				<div class="row">
					<SearchInput value={state.searchTerm} onChange={this._handleOnChange} />
				</div>
				<div class="row">
					<ShortcutList items={state.items} />
				</div>
			</div>
		)
	}
}

export default SearchContentWrapper
