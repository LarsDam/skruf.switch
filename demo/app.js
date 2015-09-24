import React from 'react';
import Switch from '../compiled';

require('../style.css');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			settings: 10
		};
	}

	render() {

		return (
			<div>

				<Switch on={(this.state.settings & 2) === 2} onChange={this.onChange.bind(this)} name="s1" value={2}>
					Toggle me! ({(this.state.settings & 2) ? 'on' : 'off'})
				</Switch>

				<br />

				<Switch on={(this.state.settings & 4) === 4} onChange={this.onChange.bind(this)} name="s2" value={4}>
					Will get cancelled! ({(this.state.settings & 4) ? 'on' : 'off'})
				</Switch>

				<br />

				<Switch on={(this.state.settings & 8) === 8} onChange={this.onChange.bind(this)} name="s3" disabled={true} value={8}>
					Disabled! ({(this.state.settings & 8) ? 'on' : 'off'})
				</Switch>

				<br />

				<Switch size="lg">
					BIGGER!
				</Switch>

			</div>
		);
	}

	onChange(name, value, on) {
		let s = this.state.settings;
		if(name === 's2') {
			setTimeout(() => {
				s -= value;
				this.setState({settings: s});
			}, 250);
		}

		if(this.state.settings & value) {
			s -= value;
		} else {
			s += value;
		}

		this.setState({settings: s});
	}
}

React.render(
	<App />,
	document.getElementById('main')
);