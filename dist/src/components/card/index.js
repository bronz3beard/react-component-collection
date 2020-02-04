"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cardModule = _interopRequireDefault(require("./card.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @render react

 * @name BasicCard

 * @description This is a basic card element to hold other elements and jsx elements and display in a grid it will displa the grid when it is mapped, otherwise it will just display one item in a card.

 * @example     {items.map((item) => (

                    <BasicCard>

                        <Element item={item} />

                    </BasicCard>

                    )

                )}

 * @example <BasicCard>

                {new Date().toLocaleDateString()}

            </BasicCard>

 */
var BasicCard = function BasicCard(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    className: _cardModule.default.cardGrid
  }, _react.default.createElement("div", {
    className: _cardModule.default.card
  }, children));
};

BasicCard.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string, _propTypes.default.element, _propTypes.default.number, _propTypes.default.instanceOf(Date)])
};
BasicCard.defaultProps = {
  children: null
};
var _default = BasicCard;
exports.default = _default;

//# sourceMappingURL=index.js.map