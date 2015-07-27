import React from 'react';

require('./style.css');

class Switch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {on: props.on};
	}

	componentWillReceiveProps(nextProps) {
		if('on' in nextProps && this.state.on !== nextProps.on) {
			this.setState({on: nextProps.on});
		}
	}

	render() {
		var cls = 'switch';

		if(this.state.on) {
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
					<input type="checkbox" readOnly checked={this.state.on} style={{display: 'none'}} />
					<div className="handler"></div>
				</div>
				{this.props.children}
			</label>
		);
	}

	handleClick(e) {
		let on = !this.state.on;

		e.stopPropagation();
		e.preventDefault();

		if(this.props.disabled) {
			return;
		}

		this.setState({on: on});

		if(this.props.onChange) {
			setTimeout(() => {
				this.props.onChange(this.props.name, on)	
			}, 400);
		}
	}
}

Switch.propTypes = { 
	on: React.PropTypes.bool,
	onChange: React.PropTypes.func,
	disabled: React.PropTypes.bool,
	size: React.PropTypes.oneOf(['m', 'lg'])
};

Switch.defaultProps = { 
	on: false,
	disabled: false,
	size: 'm'
};

export default Switch;