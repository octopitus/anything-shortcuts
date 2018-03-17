// @flow
import React from 'preact'
import classnames from 'classnames'

import style from './style'

const Header = () => {
	const headerClasses = classnames('row', style.header)
	return <header class={headerClasses} />
}

export default Header
