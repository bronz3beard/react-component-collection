"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Picture = function Picture(props) {
  var image = props.image,
      images = props.images,
      imageAlt = props.imageAlt,
      imageId = props.imageId;

  var share = function share() {
    window.alert('The product has been shared!');
  };

  (0, _react.useEffect)(function () {
    share();
  }, []);
  return _react.default.createElement(_react.Fragment, null, images && images.map(function (image) {
    return _react.default.createElement("div", {
      className: "column",
      key: imageId
    }, _react.default.createElement("div", {
      className: "image-container"
    }, _react.default.createElement("img", {
      id: imageId,
      draggable: "false",
      src: image.imageUrl,
      alt: imageAlt,
      onMouseDown: function onMouseDown(event) {
        return event.preventDefault();
      }
    })));
  }), image && image && _react.default.createElement("img", {
    draggable: "false",
    src: image,
    alt: imageAlt,
    onMouseDown: function onMouseDown(event) {
      return event.preventDefault();
    }
  }));
};

Picture.propTypes = {
  image: _propTypes.default.string,
  images: _propTypes.default.arrayOf(_propTypes.default.shape({
    imageUrl: _propTypes.default.string
  })),
  imageAlt: _propTypes.default.string.isRequired,
  imageId: _propTypes.default.string.isRequired
};
Picture.defaultProps = {
  image: '',
  images: null,
  imageId: ''
};
var _default = Picture;
exports.default = _default;

//# sourceMappingURL=picture.js.map