'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Switch = (function (_React$Component) {
	_inherits(Switch, _React$Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		_get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);
		this.state = { on: props.on };
	}

	_createClass(Switch, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('on' in nextProps && this.state.on !== nextProps.on) {
				this.setState({ on: nextProps.on });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var cls = 'switch';

			if (this.state.on) {
				cls += ' active';
			}

			if (this.props.disabled) {
				cls += ' disable';
			}

			if (this.props.size === 'lg') {
				cls += ' switch-large';
			}

			return _react2['default'].createElement(
				'label',
				{ onClick: this.handleClick.bind(this) },
				_react2['default'].createElement(
					'div',
					{ className: cls },
					_react2['default'].createElement('input', { type: "checkbox", readOnly: true, checked: this.state.on, style: { display: 'none' } }),
					_react2['default'].createElement('div', { className: "handler" })
				),
				this.props.children
			);
		}
	}, {
		key: 'handleClick',
		value: function handleClick(e) {
			var _this = this;

			var on = !this.state.on;

			e.stopPropagation();
			e.preventDefault();

			if (this.props.disabled) {
				return;
			}

			this.setState({ on: on });

			if (this.props.onChange) {
				setTimeout(function () {
					_this.props.onChange(_this.props.name, _this.props.value, on);
				}, 400);
			}
		}
	}]);

	return Switch;
})(_react2['default'].Component);

Switch.propTypes = {
	on: _react2['default'].PropTypes.bool,
	onChange: _react2['default'].PropTypes.func,
	disabled: _react2['default'].PropTypes.bool,
	size: _react2['default'].PropTypes.oneOf(['m', 'lg']),
	name: _react2['default'].PropTypes.string,
	value: _react2['default'].propTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
};

Switch.defaultProps = {
	on: false,
	disabled: false,
	size: 'm'
};

exports['default'] = Switch;
module.exports = exports['default'];
