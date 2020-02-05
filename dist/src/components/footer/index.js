"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./footer.module.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var children = props.children;
  return _react.default.createElement("footer", null, children);
};

Footer.propTypes = {
  children: _propTypes.default.node
};
Footer.defaultProps = {
  children: null
};
var _default = Footer;
exports.default = _default;

//# sourceMappingURL=index.js.map