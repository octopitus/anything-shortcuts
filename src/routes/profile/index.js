// @flow
import React, { Component } from 'preact'
import style from './style'

type Props = {
	user: string
}

type State = {
	time: number,
	count: number
}

export default class Profile extends Component<Props, State> {
	state = {
		time: Date.now(),
		count: 10
	}

	_timer: any

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this._timer = setInterval(this.updateTime, 1000)
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this._timer)
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() })
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 })
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }: Props, { time, count }: State) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>
				<div>Current time: {new Date(time).toLocaleString()}</div>
				<p>
					<button onClick={this.increment}>Click Me</button> Clicked {count} times.
				</p>
			</div>
		)
	}
}
