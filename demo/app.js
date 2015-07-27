import React from 'react';
import Switch from '../index';

window.React = React;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			s1: true,
			s2: false,
			s3: true
		};
	}

	render() {

		return (
			<div>

				<Switch on={this.state.s1} onChange={this.onChange.bind(this)} name="s1">
					Toggle me! ({this.state.s1 ? 'on' : 'off'})
				</Switch>
				
				<br />

				<Switch on={this.state.s2} onChange={this.onChange.bind(this)} name="s2">
					Will get cancelled! ({this.state.s2 ? 'on' : 'off'})
				</Switch>

				<br />

				<Switch on={this.state.s3} onChange={this.onChange.bind(this)} name="s3" disabled={true}>
					Disabled! ({this.state.s3 ? 'on' : 'off'})
				</Switch>

				<br />

				<Switch size="lg">
					BIGGER!
				</Switch>

			</div>
		);
	}

	onChange(name, on) {
		let state = this.state;

		if(name === 's2') {
			on = false;
		}

		state[name] = on;

		this.setState({state});
	}
}

React.render(
	<App />,
	document.getElementById('main')
);