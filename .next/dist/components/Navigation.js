'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n\n  a {\n    color: #fff;\n    display: inline-block;\n    margin: 0.5em;\n    font-family: \'Merriweather Sans\', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    text-transform: uppercase;\n    text-decoration: none;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n      font-weight: 700;\n    }\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n\n  a {\n    color: #fff;\n    display: inline-block;\n    margin: 0.5em;\n    font-family: \'Merriweather Sans\', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    text-transform: uppercase;\n    text-decoration: none;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n      font-weight: 700;\n    }\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _prefetch = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = _styledComponents2.default.nav(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    NavBar,
    null,
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/' },
      _react2.default.createElement(
        'a',
        null,
        'Home'
      )
    ),
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/meet-the-filmmakers' },
      _react2.default.createElement(
        'a',
        null,
        'Meet The Filmmakers'
      )
    ),
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/watch' },
      _react2.default.createElement(
        'a',
        null,
        'Watch'
      )
    ),
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/about' },
      _react2.default.createElement(
        'a',
        null,
        'About'
      )
    ),
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/news' },
      _react2.default.createElement(
        'a',
        null,
        'News'
      )
    )
  );
};