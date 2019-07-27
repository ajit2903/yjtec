"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultRenderLogo = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("./index.less");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BaseMenu = _interopRequireDefault(require("./BaseMenu"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sider = _layout.default.Sider;

var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return _react.default.createElement("img", {
      src: logo,
      alt: "logo"
    });
  }

  if (typeof logo == 'function') {
    return logo();
  }

  return logo;
};

exports.defaultRenderLogo = defaultRenderLogo;

var SiderMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SiderMenu, _Component);

  function SiderMenu() {
    _classCallCheck(this, SiderMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(SiderMenu).apply(this, arguments));
  }

  _createClass(SiderMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          _this$props$siderWidt = _this$props.siderWidth,
          siderWidth = _this$props$siderWidt === void 0 ? 256 : _this$props$siderWidt,
          title = _this$props.title,
          logo = _this$props.logo;
      var siderClassName = (0, _classnames.default)('ant-pro-sider-menu-sider', {
        light: theme === 'light'
      });
      return _react.default.createElement(Sider, {
        width: siderWidth,
        className: siderClassName
      }, _react.default.createElement("div", {
        className: "ant-pro-sider-menu-logo",
        id: "logo"
      }, _react.default.createElement("a", null, defaultRenderLogo(logo), _react.default.createElement("h1", null, title, "\u666F\u5728\u7EBF\u7CFB\u7EDF"))), _react.default.createElement(_BaseMenu.default, _extends({}, this.props, {
        mode: "inline",
        theme: "dark",
        style: {
          padding: '16px 0',
          width: '100%'
        }
      })));
    }
  }]);

  return SiderMenu;
}(_react.Component);

exports.default = SiderMenu;