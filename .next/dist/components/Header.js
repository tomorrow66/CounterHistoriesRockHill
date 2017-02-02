'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #2f3240;\n  position: fixed;\n  width: 100%;\n  height: 80px;\n  padding: 0 20px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    height: 60px;\n  }\n\n  .branding {\n    width: 150px;\n    @media (min-width: 768px) {\n      width: 200px;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #2f3240;\n  position: fixed;\n  width: 100%;\n  height: 80px;\n  padding: 0 20px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    height: 60px;\n  }\n\n  .branding {\n    width: 150px;\n    @media (min-width: 768px) {\n      width: 200px;\n    }\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHeadroom = require('react-headroom');

var _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteHeader = _styledComponents2.default.header(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    SiteHeader,
    null,
    _react2.default.createElement(
      'div',
      { className: 'branding' },
      _react2.default.createElement(
        _link2.default,
        { href: '/' },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement('img', { src: '/static/images/logo.svg' })
        )
      )
    ),
    _react2.default.createElement(_Navigation2.default, null)
  );
};