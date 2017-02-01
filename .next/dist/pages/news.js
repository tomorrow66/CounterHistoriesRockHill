'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/news_body.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px;\n  }\n\n  .awards-list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: space-between;\n\n    li {\n      font-size: 16px;\n      line-height: 1.6;\n      font-style: italic;\n      width: calc(80%/2);\n      list-style: none;\n      margin-bottom: 20px;\n\n      @media (min-width: 768px) {\n        font-size: 22px;\n        margin-bottom: 60px;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/news_body.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px;\n  }\n\n  .awards-list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: space-between;\n\n    li {\n      font-size: 16px;\n      line-height: 1.6;\n      font-style: italic;\n      width: calc(80%/2);\n      list-style: none;\n      margin-bottom: 20px;\n\n      @media (min-width: 768px) {\n        font-size: 22px;\n        margin-bottom: 60px;\n      }\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n'], ['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _BannerTitle = require('../components/BannerTitle');

var _BannerTitle2 = _interopRequireDefault(_BannerTitle);

var _Quote = require('../components/Quote');

var _Quote2 = _interopRequireDefault(_Quote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AwardsSection = _styledComponents2.default.section(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { title: 'News' },
    _react2.default.createElement(
      _Banner2.default,
      { img: '/static/images/news_banner.jpg' },
      _react2.default.createElement(
        _BannerTitle2.default,
        null,
        'News'
      ),
      _react2.default.createElement(
        _BannerTitle.BannerSpan,
        null,
        'Counter Histories: Rock Hill'
      )
    ),
    _react2.default.createElement(
      AwardsSection,
      null,
      _react2.default.createElement(
        Title,
        null,
        'Awards and Accolades'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'awards-list' },
        _react2.default.createElement(
          'li',
          null,
          '90 percent carriage in top 25 markets on PBS'
        ),
        _react2.default.createElement(
          'li',
          null,
          '7 Best Documentary Awards'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Telly Awards 2016: Bronze Winner'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Big River Film Festival 2016: Best Documentary Short'
        ),
        _react2.default.createElement(
          'li',
          null,
          'LA Independent Artist Film Festival 2016: Best Documentary'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Broadcast on American  Black Film Festival  Series on Magic Johnson\u2019s Aspire! Network'
        ),
        _react2.default.createElement(
          'li',
          null,
          '28 Film Festival Screenings and counting'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Tribute Film Festival 2016: Best Heritage Short Documentary'
        ),
        _react2.default.createElement(
          'li',
          null,
          'SaMo Indie Film Festival 2016: Best Documentary'
        )
      )
    ),
    _react2.default.createElement(
      _Quote2.default,
      null,
      _react2.default.createElement(
        'blockquote',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Counter Histories: Rock Hill is an unexpected breath of fresh air.'
        ),
        _react2.default.createElement(
          'cite',
          null,
          'Hollywood RedCarpetReport'
        )
      )
    )
  );
};