// @flow
import React, { Component } from 'preact'
import classnames from 'classnames'

import style from './style'

type Props = {
	value?: string,
	onChange: string => void
}

class SearchInput extends Component<Props> {
	static defaultProps = {
		onChange: () => {}
	}

	_onChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
		this.props.onChange(event.target.value)
	}

	render(props: Props) {
		const searchWrapperClasses = classnames(
			'column',
			'column-100',
			style.searchWrapper
		)

		return (
			<div class={searchWrapperClasses}>
				<input
					type="search"
					value={props.value}
					placeholder="Search for anything..."
					onInput={this._onChange}
					class={style.input}
				/>
			</div>
		)
	}
}

export default SearchInput
