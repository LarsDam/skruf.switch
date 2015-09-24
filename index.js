import React from 'react';

class Switch extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if('on' in nextProps && this.props.on !== nextProps.on) {
			this.setState({on: nextProps.on});
		}
	}

	render() {
		var cls = 'switch';

		if(this.props.on) {
			cls += ' active';
		}

		if(this.props.disabled) {
			cls += ' disable';
		}

		if(this.props.size === 'lg') {
			cls += ' switch-large'
		}

		return (
			<label onClick={this.handleClick.bind(this)}>
				<div className={cls}>
					<input type="checkbox" readOnly checked={this.props.on} style={{display: 'none'}} />
					<div className="handler"></div>
				</div>
				{this.props.children}
			</label>
		);
	}

	handleClick(e) {
		let on = !this.props.on;

		e.stopPropagation();
		e.preventDefault();

		if(this.props.disabled) {
			return;
		}

		if(this.props.onChange) {
			this.props.onChange(this.props.name, this.props.value, on);
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

export default Switch;