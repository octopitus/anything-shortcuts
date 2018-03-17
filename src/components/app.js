// @flow
import React, { Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'

if ((module: any).hot) {
	require('preact/debug')
}

type Props = {
	//
}

export default class App extends Component<Props> {
	_currentUrl: string

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = (e: { url: string }): void => {
		this._currentUrl = e.url
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		)
	}
}
