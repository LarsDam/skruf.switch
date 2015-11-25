'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = (function (_React$Component) {
	_inherits(Switch, _React$Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);

		var checked = false;

		if ('on' in props) {
			checked = _this.props.on;
		}

		_this.state = { checked: checked };
		return _this;
	}

	_createClass(Switch, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('on' in nextProps) {
				this.setState({
					checked: nextProps.on
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var cls = 'switch';

			if (this.state.checked) {
				cls += ' active';
			}

			if (this.props.disabled) {
				cls += ' disable';
			}

			if (this.props.size === 'lg') {
				cls += ' switch-large';
			}

			return _react2.default.createElement(
				'label',
				null,
				_react2.default.createElement(
					'div',
					{ className: cls },
					_react2.default.createElement('input', { type: 'checkbox', name: this.props.name, readOnly: true, checked: this.state.checked, style: { display: 'none' }, onChange: this.handleChange, value: this.props.value }),
					_react2.default.createElement('div', { className: 'handler' })
				),
				this.props.children
			);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {

			if (this.props.disabled) {
				return;
			}

			this.setState({ checked: !this.state.checked });

			if (this.props.onChange) {
				this.props.onChange(e);
			}
		}
	}]);

	return Switch;
})(_react2.default.Component);

exports.default = Switch;

Switch.propTypes = {
	on: _react2.default.PropTypes.bool,
	onChange: _react2.default.PropTypes.func,
	disabled: _react2.default.PropTypes.bool,
	size: _react2.default.PropTypes.oneOf(['m', 'lg']),
	name: _react2.default.PropTypes.string,
	value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

Switch.defaultProps = {
	on: false,
	disabled: false,
	size: 'm'
};
