'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-self: flex-start;\n  padding: 0;\n\n  li {\n    display: flex;\n    width: calc(100% / 3);\n    padding: 8px;\n\n    @media (min-width: 768px) {\n      width: calc(100% / 7);\n      padding: 0 8px;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-self: flex-start;\n  padding: 0;\n\n  li {\n    display: flex;\n    width: calc(100% / 3);\n    padding: 8px;\n\n    @media (min-width: 768px) {\n      width: calc(100% / 7);\n      padding: 0 8px;\n    }\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactGa = require('react-ga');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Platforms = _styledComponents2.default.ul(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    Platforms,
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactGa.OutboundLink,
        {
          eventLabel: 'Itunes Store',
          to: 'https://itunes.apple.com/us/movie/counter-histories-rock-hill/id1192431812',
          target: '_blank' },
        _react2.default.createElement('img', { src: '/static/images/itunes.png', alt: 'Itunes' })
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactGa.OutboundLink,
        {
          eventLabel: 'Amazon Video',
          to: 'http://a.co/hMguyJB',
          target: '_blank' },
        _react2.default.createElement('img', { src: '/static/images/amazon_video.png', alt: 'Amazon Video' })
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactGa.OutboundLink,
        {
          eventLabel: 'Google Play Video',
          to: 'https://play.google.com/store/movies/details/Counter_Histories_Rock_Hill?id=dpxgAwdVu9k&hl=en',
          target: '_blank' },
        _react2.default.createElement('img', { src: '/static/images/google_play.png', alt: 'Google Play Video' })
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement('img', { src: '/static/images/dish.png', alt: 'Dish' })
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement('img', { src: '/static/images/vudu.png', alt: 'Vudu' })
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactGa.OutboundLink,
        {
          eventLabel: 'Vimeo VOD',
          to: 'https://vimeo.com/ondemand/counterhistoriesrockhill',
          target: '_blank' },
        _react2.default.createElement('img', { src: '/static/images/vimeo_vod.png', alt: 'Vimeo VOD' })
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement('img', { src: '/static/images/shaw_media.png', alt: 'Shaw Media' })
    )
  );
};