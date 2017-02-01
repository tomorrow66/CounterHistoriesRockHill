'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerSpan = undefined;

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    font-size: 85px;\n  }\n'], ['\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    font-size: 85px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 18px;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    font-size: 28px;\n  }\n'], ['\n  font-size: 18px;\n  line-height: 1.28;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    font-size: 28px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.h1(_templateObject);
var BannerSpan = exports.BannerSpan = _styledComponents2.default.h2(_templateObject2);