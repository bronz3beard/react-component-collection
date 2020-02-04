"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pictureModule = _interopRequireDefault(require("./picture.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @render react

 * @name Picture

 * @description This is an img element that can have images mapped to it or just be used with a single image src.

 * @example <Picture image="https://www.w3schools.com/w3css/img_lights.jpg" imageAlt="Northern Lights" />

 * @example <Picture image={images} />

 */
var Picture = function Picture(props) {
  var image = props.image,
      images = props.images,
      imageAlt = props.imageAlt,
      imageId = props.imageId;
  return _react.default.createElement("div", {
    className: _pictureModule.default.row
  }, images && images.map(function (image, index) {
    return _react.default.createElement("div", {
      className: _pictureModule.default.column,
      key: !imageId ? index : imageId
    }, _react.default.createElement("div", {
      className: _pictureModule.default.imageContainer
    }, _react.default.createElement("img", {
      id: !imageId ? index : imageId,
      draggable: "false",
      src: image.imageUrl,
      alt: image.imageAlt,
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
    imageUrl: _propTypes.default.string,
    imageAlt: _propTypes.default.string
  })),
  imageId: _propTypes.default.string,
  imageAlt: _propTypes.default.string.isRequired
};
Picture.defaultProps = {
  image: '',
  images: null,
  imageId: ''
};
var _default = Picture;
exports.default = _default;

//# sourceMappingURL=index.js.map