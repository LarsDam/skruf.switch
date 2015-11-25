import React from 'react';

export default class Switch extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);

		let checked = false;

		if('on' in props) {
			checked = this.props.on;
		}

		this.state = {checked};
	}

	componentWillReceiveProps(nextProps) {
		if ('on' in nextProps) {
			this.setState({
				checked: nextProps.on
			});
		}
	}

	render() {
		var cls = 'switch';

		if(this.state.checked) {
			cls += ' active';
		}

		if(this.props.disabled) {
			cls += ' disable';
		}

		if(this.props.size === 'lg') {
			cls += ' switch-large'
		}

		return (
			<label>
				<div className={cls}>
					<input type="checkbox" name={this.props.name} readOnly checked={this.state.checked} style={{display: 'none'}} onChange={this.handleChange} value={this.props.value} />
					<div className="handler"></div>
				</div>
				{this.props.children}
			</label>
		);
	}

	handleChange(e) {

		if(this.props.disabled) {
			return;
		}

		this.setState({checked: !this.state.checked});

		if(this.props.onChange) {
			this.props.onChange(e);
		}
	}
}

Switch.propTypes = {
	on: React.PropTypes.bool,
	onChange: React.PropTypes.func,
	disabled: React.PropTypes.bool,
	size: React.PropTypes.oneOf(['m', 'lg']),
	name: React.PropTypes.string,
	value: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	])
};

Switch.defaultProps = {
	on: false,
	disabled: false,
	size: 'm'
};