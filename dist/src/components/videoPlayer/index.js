"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _modal = _interopRequireDefault(require("../modal"));

var _videoPlayerModule = _interopRequireDefault(require("./videoPlayer.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VideoPlayer = function VideoPlayer(props) {
  var url = props.url,
      mute = props.mute,
      loop = props.loop,
      title = props.title,
      byLine = props.byLine,
      listType = props.listType,
      imageUrl = props.imageUrl,
      controls = props.controls,
      autoPlay = props.autoPlay,
      withModal = props.withModal,
      playListID = props.playListID,
      videoTitle = props.videoTitle,
      playsInPicture = props.playsInPicture,
      backgroundVimeo = props.backgroundVimeo,
      modalWithImage = props.modalWithImage,
      videoDescription = props.videoDescription;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0, _react.useState)(url),
      _useState4 = _slicedToArray(_useState3, 2),
      urlWithModal = _useState4[0],
      setUrlWithModal = _useState4[1];

  var handleModal = function handleModal() {
    setShowModal(!showModal);
    setUrlWithModal(url);
  };

  var handleContextMenu = function handleContextMenu(event) {
    event.preventDefault();
  };

  var customPlayIcon = _react.default.createElement(_react.default.Fragment, null, withModal ? _react.default.createElement("img", {
    className: _videoPlayerModule.default.playButton,
    src: "",
    alt: "play video",
    onClick: handleModal
  }) : _react.default.createElement("img", {
    src: "",
    alt: "play video"
  }));

  var videoPlayersConfig = {
    vimeo: {
      playerOptions: {
        loop: loop,
        mute: mute,
        title: title,
        controls: controls,
        byline: byLine,
        frameborder: false,
        autoplay: autoPlay,
        background: backgroundVimeo
      },
      preload: true
    },
    youtube: {
      playerVars: {
        loop: loop,
        rel: 0,
        controls: controls,
        preload: true,
        color: "white",
        autoplay: autoPlay,
        frameborder: false,
        modestbranding: true,
        listType: listType,
        list: playListID && playListID.indexOf("PL") > -1 ? playListID : "PL".concat(playListID)
      }
    },
    file: {
      /* attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes */
      // tracks: [
      //   { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
      //   { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
      //   { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' },
      // ],
    }
  };
  var lightMode = withModal && !showModal ? withModal : !withModal && !showModal;
  var withPlaceHolderimage = imageUrl === "" ? lightMode : !showModal && imageUrl;
  var backGroundStyle = {
    background: "url(".concat(imageUrl, ")"),
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };
  return _react.default.createElement("div", null, !showModal && _react.default.createElement("div", {
    className: _videoPlayerModule.default.playerContainer
  }, _react.default.createElement("div", {
    className: _videoPlayerModule.default.playerBoarder
  }, _react.default.createElement("div", {
    className: _videoPlayerModule.default.bgImage,
    style: imageUrl !== "" ? backGroundStyle : null
  }), withModal && customPlayIcon, videoTitle && _react.default.createElement("span", {
    className: _videoPlayerModule.default.videoTitle
  }, videoTitle), _react.default.createElement(_reactPlayer.default, {
    playsinline: true,
    volume: 0.7,
    width: "100%",
    height: "100%",
    url: url,
    light: withPlaceHolderimage,
    playing: !withModal,
    pip: playsInPicture,
    playIcon: lightMode && customPlayIcon,
    config: videoPlayersConfig,
    onContextMenu: handleContextMenu
  }), videoDescription && _react.default.createElement("div", {
    className: _videoPlayerModule.default.videoDescription
  }, videoDescription))), _react.default.createElement(_modal.default, {
    showModal: showModal,
    handleModal: handleModal,
    backGroundStyle: modalWithImage && imageUrl !== "" ? backGroundStyle : null,
    hideBodyOverflowY: true
  }, _react.default.createElement("div", {
    className: _videoPlayerModule.default.playerContainer
  }, _react.default.createElement("div", {
    className: _videoPlayerModule.default.playerBoarder
  }, _react.default.createElement(_reactPlayer.default, {
    playsinline: true,
    volume: 0.7,
    width: "100%",
    height: "100%",
    playing: showModal,
    url: urlWithModal,
    config: videoPlayersConfig,
    onContextMenu: handleContextMenu
  })))));
};

VideoPlayer.propTypes = {
  loop: _propTypes.default.bool,
  mute: _propTypes.default.bool,
  title: _propTypes.default.bool,
  byLine: _propTypes.default.bool,
  controls: _propTypes.default.bool,
  autoPlay: _propTypes.default.bool,
  withModal: _propTypes.default.bool,
  listType: _propTypes.default.string,
  imageUrl: _propTypes.default.string,
  playListID: _propTypes.default.string,
  videoTitle: _propTypes.default.string,
  playsInPicture: _propTypes.default.bool,
  modalWithImage: _propTypes.default.bool,
  backgroundVimeo: _propTypes.default.bool,
  url: _propTypes.default.string.isRequired,
  videoDescription: _propTypes.default.string
};
VideoPlayer.defaultProps = {
  loop: false,
  mute: false,
  title: false,
  imageUrl: "",
  listType: "",
  byLine: false,
  playListID: "",
  videoTitle: "",
  controls: false,
  autoPlay: false,
  withModal: false,
  videoDescription: "",
  playsInPicture: false,
  modalWithImage: false,
  backgroundVimeo: false
};
var _default = VideoPlayer;
exports.default = _default;

//# sourceMappingURL=index.js.map