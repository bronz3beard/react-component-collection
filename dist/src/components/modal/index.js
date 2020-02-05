"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _modalModule = _interopRequireDefault(require("./modal.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**

 * @render react

 * @name Modal

 * @description This is a simple modal element which can contain any type of children.

Modal props:  

`children` = child properties of the Modal component.  

`showModal={showModal}` = a Boolean to toggle Modal visibility.  

`handleModal={handleModal}` = A simple Boolean function to show and hide modal.  

`backGroundStyle={backGroundStyle}` = This is an alternative to having a black modal background, you can pass inline style of a background image.

`hideBodyOverflowY={false}` = This is set to `true` by default.

 * @example <Modal>This is a Modal</Modal>

 */
var Modal = function Modal(props) {
  var children = props.children,
      showModal = props.showModal,
      handleModal = props.handleModal,
      backGroundStyle = props.backGroundStyle,
      hideBodyOverflowY = props.hideBodyOverflowY;
  (0, _react.useEffect)(function () {
    document.body.style.overflowY = showModal && hideBodyOverflowY ? "hidden" : "auto";
  }, [hideBodyOverflowY, showModal]); // TODO: Maybe add close X or icon for handleModal and remove from modalBody.

  return _react.default.createElement(_react.default.Fragment, null, showModal && _react.default.createElement("div", {
    className: _modalModule.default.modalOverlay,
    style: !backGroundStyle ? null : backGroundStyle
  }, _react.default.createElement("div", {
    className: _modalModule.default.modalBody,
    onClick: handleModal
  }, children)));
};

Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.instanceOf(_propTypes.element), _propTypes.default.node]),
  handleModal: _propTypes.default.func,
  showModal: _propTypes.default.bool,
  backGroundStyle: _propTypes.default.objectOf({
    background: _propTypes.default.string,
    backgroundSize: _propTypes.default.string,
    backgroundPosition: _propTypes.default.string,
    backgroundRepeat: _propTypes.default.string,
    backgroundAttachment: _propTypes.default.string
  }),
  hideBodyOverflowY: _propTypes.default.bool
};
Modal.defaultProps = {
  children: null,
  handleModal: null,
  showModal: false,
  backGroundStyle: null,
  hideBodyOverflowY: true
};
var _default = Modal;
exports.default = _default;

//# sourceMappingURL=index.js.map