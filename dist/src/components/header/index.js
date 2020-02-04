"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headerModule = _interopRequireDefault(require("./header.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @render react

 * @name FHeader

 * @description This is a simple header element which can contain any type of children

 * @example <Header>The is the headers</Header> 

 */
var Header = function Header(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    className: _headerModule.default.header
  }, children);
};

Header.propTypes = {
  children: _propTypes.default.node
};
Header.defaultProps = {
  children: null
};
var _default = Header;
exports.default = _default;

//# sourceMappingURL=index.js.map