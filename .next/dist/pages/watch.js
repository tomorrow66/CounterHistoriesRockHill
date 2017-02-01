'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/screenings_info.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  border-bottom: 10px solid rgba(26,115,99,1);\n  height: 515px;\n  padding: 0 5%;\n\n  @media (min-width: 768px) {\n    padding: 0 60px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/screenings_info.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  border-bottom: 10px solid rgba(26,115,99,1);\n  height: 515px;\n  padding: 0 5%;\n\n  @media (min-width: 768px) {\n    padding: 0 60px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n'], ['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-self: flex-start;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0 20px;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n  }\n'], ['\n  display: flex;\n  align-self: flex-start;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0 20px;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  background-color: rgba(3,2,2, .65);\n  margin-top: 60px;\n  padding: 20px 10%;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 60px 10%;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  background-color: rgba(3,2,2, .65);\n  margin-top: 60px;\n  padding: 20px 10%;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 60px 10%;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #2f3240;\n  height: 550px;\n  padding: 0 60px;\n  position: relative;\n\n  .eventsTable {\n    background-color: rgba(3,2,2, .85);\n    width: 100%;\n    height: 400px;\n    padding: 20px;\n    overflow-x: auto;\n  }\n\n  table {\n    width: 100%;\n    height: 400px;\n    overflow-y: scroll;\n  }\n  thead th {\n    color: #d99518;\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-align: left;\n    height: 60px;\n  }\n  tbody td {\n    height: 30px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #2f3240;\n  height: 550px;\n  padding: 0 60px;\n  position: relative;\n\n  .eventsTable {\n    background-color: rgba(3,2,2, .85);\n    width: 100%;\n    height: 400px;\n    padding: 20px;\n    overflow-x: auto;\n  }\n\n  table {\n    width: 100%;\n    height: 400px;\n    overflow-y: scroll;\n  }\n  thead th {\n    color: #d99518;\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-align: left;\n    height: 60px;\n  }\n  tbody td {\n    height: 30px;\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PageSection = require('../components/PageSection');

var _PageSection2 = _interopRequireDefault(_PageSection);

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _BannerTitle = require('../components/BannerTitle');

var _BannerTitle2 = _interopRequireDefault(_BannerTitle);

var _ScreeningsList = require('../components/ScreeningsList');

var _ScreeningsList2 = _interopRequireDefault(_ScreeningsList);

var _Gallery = require('../components/Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

var _PlatformLinks = require('../components/PlatformLinks');

var _PlatformLinks2 = _interopRequireDefault(_PlatformLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreeningInfo = _styledComponents2.default.section(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

var SubTitle = _styledComponents2.default.h3(_templateObject3);

var Blurb = _styledComponents2.default.div(_templateObject4);

var ScreeningListings = _styledComponents2.default.section(_templateObject5);

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { title: 'Watch' },
    _react2.default.createElement(
      _PageSection2.default,
      null,
      _react2.default.createElement(
        _Banner2.default,
        { img: '/static/images/screenings_banner.jpg' },
        _react2.default.createElement(
          _BannerTitle2.default,
          null,
          'Screenings'
        ),
        _react2.default.createElement(
          _BannerTitle.BannerSpan,
          null,
          'Counter Histories: Rock Hill'
        )
      ),
      _react2.default.createElement(
        ScreeningInfo,
        null,
        _react2.default.createElement(
          Title,
          null,
          'Download, stream or catch a screening.'
        ),
        _react2.default.createElement(
          SubTitle,
          null,
          'Available now on Amazon, Google, Dish, Vudu, Vimeo, and Shaw.'
        ),
        _react2.default.createElement(_PlatformLinks2.default, null),
        _react2.default.createElement(
          Blurb,
          null,
          _react2.default.createElement(
            'p',
            null,
            '1961. Segregation is alive and well in the South and revolution is happening around the world.  In a small town in South Carolina, nine students stood up to inequality by agreeing to sit down in protest at the local whites only lunch counter and demand service.'
          )
        )
      ),
      _react2.default.createElement(
        ScreeningListings,
        null,
        _react2.default.createElement(
          Title,
          null,
          'Screenings'
        ),
        _react2.default.createElement(
          'div',
          { className: 'eventsTable' },
          _react2.default.createElement(_ScreeningsList2.default, null)
        )
      ),
      _react2.default.createElement(
        _Gallery2.default,
        null,
        _react2.default.createElement('img', { src: '/static/images/screenings_gallery1.jpg' }),
        _react2.default.createElement('img', { src: '/static/images/screenings_gallery2.jpg' })
      )
    )
  );
};