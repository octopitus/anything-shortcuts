//@flow
import React from 'preact'
import classnames from 'classnames'

import SearchInput from './SearchInput'

import style from './style'

const ContentWrapper = () => {
	const wrapperClasses = classnames('row', style.contentWrapper)

	return (
		<div class="container">
			<div class={wrapperClasses}>
				<SearchInput onChange={v => console.log(v)} />
			</div>
		</div>
	)
}

export default ContentWrapper
