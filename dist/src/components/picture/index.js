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

 * @description This is an img element that can be passed an images array or just be used with a single image src. The Images array can have a maximum of `two items` in the array, the `key` can be called anything you like (key is not restricted to `imageUrl` and `imageAlt` as shown in prop types) the `key` that holds the image url value must be secure and contain `https://` this is what the variable is testing for to know which `key value pair` has the `image url` and which has the `alternative text`.

 If you need to add more items to your array, you will need to add more tests for `values`

 NOTE: the array concept is still a WIP.

 * 

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
    var objValue = Object.values(image);

    if (!objValue || !objValue[0] || !objValue[1]) {
      return null;
    }

    var imageAlt = objValue && objValue[0].indexOf('https://') > -1 ? objValue[1] : objValue[0];
    var imageUrl = objValue && objValue[0].indexOf('https://') > -1 ? objValue[0] : objValue[1];
    return _react.default.createElement("div", {
      className: _pictureModule.default.column,
      key: !imageId ? index : imageId
    }, _react.default.createElement("div", {
      className: _pictureModule.default.imageContainer
    }, _react.default.createElement("img", {
      id: !imageId ? index : imageId,
      draggable: "false",
      src: imageUrl,
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