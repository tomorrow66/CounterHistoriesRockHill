'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  .laurelImg {\n    width: calc(100%/3);\n    padding: 10px;\n    @media (min-width: 768px) {\n      width: calc(100%/8);\n      margin: 4px;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  .laurelImg {\n    width: calc(100%/3);\n    padding: 10px;\n    @media (min-width: 768px) {\n      width: calc(100%/8);\n      margin: 4px;\n    }\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Laurels = _styledComponents2.default.div(_templateObject);

var _laurels = [{ name: 'New Media Laurel', image: '/static/images/laurels/new_mediaFF.png' }, { name: 'GCUFF Laurel', image: '/static/images/laurels/gcuff_laurel.png' }, { name: 'HollyShorts Laurel', image: '/static/images/laurels/hollyshorts_laurel.png' }, { name: 'CHRH Laurel Spotlight', image: '/static/images/laurels/chrh-laurel-spotlight.png' }, { name: 'Taos laurel', image: '/static/images/laurels/taos_laurel.png' }, { name: 'Tribute laurel', image: '/static/images/laurels/tribute_ff_laurel2.png' }, { name: 'College Town Laurel', image: '/static/images/laurels/CTFF_laurel.png' }, { name: 'MDIFF Laurel', image: '/static/images/laurels/MDIFF_laurel.png' }, { name: 'FirstGlance Laurel', image: '/static/images/laurels/FGFF_laurel.png' }, { name: 'West Chester Laurel', image: '/static/images/laurels/west_chester_laurel_w.png' }, { name: 'Cayman Film Laurel', image: '/static/images/laurels/tony_laurels_white.png' }, { name: 'Southern Shorts Laurel', image: '/static/images/laurels/southernshorts_laurel.png' }, { name: 'Awareness Laurel', image: '/static/images/laurels/awarenessFF_laurel.png' }];

exports.default = function () {
  var laurelItems = _laurels.map(function (laurel) {
    return _react2.default.createElement(
      'div',
      { className: 'laurelImg', key: laurel.name },
      _react2.default.createElement('img', { src: laurel.image })
    );
  });
  return _react2.default.createElement(
    Laurels,
    null,
    laurelItems
  );
};