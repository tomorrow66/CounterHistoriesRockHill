'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #1a7363;\n  padding: 10px;\n\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n\n  .links {\n    font-size: 12px;\n    margin-bottom: 20px;\n    @media (min-width: 768px) {\n      font-size: 16px;\n      margin-bottom: 40px;\n    }\n    a {\n      color: #fff;\n      text-transform: uppercase;\n      text-decoration: none;\n      padding: 0 10px;\n    }\n  }\n  .copyright {\n    font-size: 10px;\n    @media (min-width: 768px) {\n      font-size: inherit;\n    }\n    text-transform: uppercase;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #1a7363;\n  padding: 10px;\n\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n\n  .links {\n    font-size: 12px;\n    margin-bottom: 20px;\n    @media (min-width: 768px) {\n      font-size: 16px;\n      margin-bottom: 40px;\n    }\n    a {\n      color: #fff;\n      text-transform: uppercase;\n      text-decoration: none;\n      padding: 0 10px;\n    }\n  }\n  .copyright {\n    font-size: 10px;\n    @media (min-width: 768px) {\n      font-size: inherit;\n    }\n    text-transform: uppercase;\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteFooter = _styledComponents2.default.footer(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    SiteFooter,
    null,
    _react2.default.createElement(
      'nav',
      { className: 'links' },
      _react2.default.createElement(
        'a',
        { href: 'http://fr3der1ck.com', target: '_blank' },
        'Fr3der1ck'
      ),
      '|',
      _react2.default.createElement(
        'a',
        { href: 'http://tomorrowpictures.com', target: '_blank' },
        'Tommorrow Pictures'
      ),
      '|',
      _react2.default.createElement(
        'a',
        { href: 'mailto:info@tomorrowpictures.com?Subject=Counter%20Histories:%20Rock%20Hill', target: '_blank' },
        'Contact'
      )
    ),
    _react2.default.createElement(
      'small',
      { className: 'copyright' },
      '\xA9 2017 Tommorrow Pictures Inc | All Rights Reserved'
    )
  );
};