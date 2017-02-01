'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  width: 100%;\n  height: 300px;\n  border-bottom: 10px solid rgba(26,115,99,1);\n  @media (min-width: 768px) {\n    height: 400px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  width: 100%;\n  height: 300px;\n  border-bottom: 10px solid rgba(26,115,99,1);\n  @media (min-width: 768px) {\n    height: 400px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 55px;\n  font-weight: 900;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    font-size: 85px;\n  }\n'], ['\n  font-size: 55px;\n  font-weight: 900;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    font-size: 85px;\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBanner = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h1(_templateObject2);

exports.default = function (_ref) {
  var img = _ref.img,
      children = _ref.children;

  var imgUrl = img;
  var divStyle = {
    backgroundImage: 'url(' + imgUrl + ')'
  };
  return _react2.default.createElement(
    PageBanner,
    { style: divStyle },
    children
  );
};