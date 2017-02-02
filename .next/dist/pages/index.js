'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/home_hero.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  height: calc(100vh);\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  .platforms {\n    margin-top: 40px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/home_hero.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  height: calc(100vh);\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  .platforms {\n    margin-top: 40px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 50%;\n  margin-bottom: 40px;\n'], ['\n  width: 50%;\n  margin-bottom: 40px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background-color: #1a1613;\n  padding: 20px 40px;\n\n  @media (min-width: 768px) {\n    padding: 20px 120px;\n  }\n\n  .label {\n    color: #d99518;\n    font-size: 20px;\n    font-weight: 700;\n    text-transform: uppercase;\n\n    @media (min-width: 768px) {\n      font-size: 36px;\n    }\n  }\n\n  .videoEmbed {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding-bottom: 56.25%;\n    padding-top: 25px;\n  }\n\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%!important;\n    height: 100%!important;\n    border: none;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background-color: #1a1613;\n  padding: 20px 40px;\n\n  @media (min-width: 768px) {\n    padding: 20px 120px;\n  }\n\n  .label {\n    color: #d99518;\n    font-size: 20px;\n    font-weight: 700;\n    text-transform: uppercase;\n\n    @media (min-width: 768px) {\n      font-size: 36px;\n    }\n  }\n\n  .videoEmbed {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding-bottom: 56.25%;\n    padding-top: 25px;\n  }\n\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%!important;\n    height: 100%!important;\n    border: none;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #2f3240;\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px 20%;\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.65;\n    margin-bottom: 16px;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n'], ['\n  background-color: #2f3240;\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px 20%;\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.65;\n    margin-bottom: 16px;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PageSection = require('../components/PageSection');

var _PageSection2 = _interopRequireDefault(_PageSection);

var _LaurelList = require('../components/LaurelList');

var _LaurelList2 = _interopRequireDefault(_LaurelList);

var _PlatformLinks = require('../components/PlatformLinks');

var _PlatformLinks2 = _interopRequireDefault(_PlatformLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = _styledComponents2.default.section(_templateObject);

var Logo = _styledComponents2.default.h1(_templateObject2);

var Trailer = _styledComponents2.default.section(_templateObject3);

var Description = _styledComponents2.default.div(_templateObject4);

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { title: 'Home' },
    _react2.default.createElement(
      _PageSection2.default,
      null,
      _react2.default.createElement(
        Hero,
        null,
        _react2.default.createElement(
          Logo,
          null,
          _react2.default.createElement('img', { src: '/static/images/logo.svg', alt: 'Counter Histories: Rock Hill' })
        ),
        _react2.default.createElement(_LaurelList2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'platforms' },
          _react2.default.createElement(
            'p',
            null,
            'Available now on Amazon, Google, Dish, Vudu, Vimeo, and Shaw.'
          ),
          _react2.default.createElement(_PlatformLinks2.default, null)
        )
      ),
      _react2.default.createElement(
        Trailer,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'label' },
          'Watch Trailer'
        ),
        _react2.default.createElement(
          'div',
          { className: 'videoEmbed' },
          _react2.default.createElement('iframe', { src: 'https://player.vimeo.com/video/123777368?title=0&byline=0&portrait=0', width: '1280', height: '720', frameBorder: '0', allowFullScreen: true })
        )
      ),
      _react2.default.createElement(
        Description,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Nine young black men exercise their power to change history. It\u2019s 1961 and the Civil Rights movement is stalled with protest after protest, arrest after arrest, bailout after bailout and then return to life as usual in the segregated South.  Students at a small local Baptist College in Rock Hill, SC decide to sit in at their local lunch counter, get arrested, go to jail and stay there.  It\u2019s a test case that brings the national attention the movement seeks and changes the strategy of the movement. A little known story in a well chronicled history, Counter Histories: Rock Hill breaks with documentary conventions to connect with a new audience and tie the historical movement to present day struggles.'
        )
      )
    )
  );
};