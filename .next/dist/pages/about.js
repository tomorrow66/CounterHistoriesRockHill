'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/about_body.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 60px 5% 0;\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  @media (min-width: 768px) {\n    padding: 60px 20% 0;\n  }\n\n  .intro {\n    font-size: 16px;\n    line-height: 1.5;\n    text-transform: none;\n    text-align: justify;\n    padding: 20px 6%;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n      padding: 0 6%;\n    }\n  }\n\n  .description {\n    background-color: rgba(3,2,2, .55);\n    margin-top: 30px;\n    padding: 6%;\n\n    p {\n      font-size: 14px;\n      margin-bottom: 16px;\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/about_body.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 60px 5% 0;\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  @media (min-width: 768px) {\n    padding: 60px 20% 0;\n  }\n\n  .intro {\n    font-size: 16px;\n    line-height: 1.5;\n    text-transform: none;\n    text-align: justify;\n    padding: 20px 6%;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n      padding: 0 6%;\n    }\n  }\n\n  .description {\n    background-color: rgba(3,2,2, .55);\n    margin-top: 30px;\n    padding: 6%;\n\n    p {\n      font-size: 14px;\n      margin-bottom: 16px;\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(3,2,2, 1);\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px;\n  }\n\n  .cast {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-start;\n    width: 100%;\n\n    @media (min-width: 768px) {\n      width: 60%;\n    }\n\n    .member {\n      display: flex;\n      text-transform: uppercase;\n      letter-spacing: 0.28em;\n      width: 50%;\n      padding: 10px 0;\n\n      @media (min-width: 768px) {\n        justify-content: space-around;\n        width: 33.33%;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(3,2,2, 1);\n  padding: 60px 5%;\n\n  @media (min-width: 768px) {\n    padding: 60px;\n  }\n\n  .cast {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-start;\n    width: 100%;\n\n    @media (min-width: 768px) {\n      width: 60%;\n    }\n\n    .member {\n      display: flex;\n      text-transform: uppercase;\n      letter-spacing: 0.28em;\n      width: 50%;\n      padding: 10px 0;\n\n      @media (min-width: 768px) {\n        justify-content: space-around;\n        width: 33.33%;\n      }\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n'], ['\n  display: flex;\n  align-self: flex-start;\n  color: #d99518;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n  }\n']);

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

var _Quote = require('../components/Quote');

var _Quote2 = _interopRequireDefault(_Quote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutBody = _styledComponents2.default.section(_templateObject);

var FriendshipNine = _styledComponents2.default.section(_templateObject2);

var Title = _styledComponents2.default.h2(_templateObject3);

// const Quote = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #2f3240;
//   padding: 60px;

//   blockquote {
//     text-align: center;
//     p {
//       font-size: 36px;
//       font-weight: 700;
//       text-align: left;
//       letter-spacing: 0.028em;
//       margin-bottom: 20px;
//     }
//     cite {
//       color: #d99518;
//       font-size: 24px;
//       font-style: italic;
//       letter-spacing: 0.028em;
//     }
//   }
// `;

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { title: 'About' },
    _react2.default.createElement(
      _PageSection2.default,
      null,
      _react2.default.createElement(
        _Banner2.default,
        { img: '/static/images/about_banner.jpg' },
        _react2.default.createElement(
          _BannerTitle2.default,
          null,
          'About'
        ),
        _react2.default.createElement(
          _BannerTitle.BannerSpan,
          null,
          'Counter Histories: Rock Hill'
        )
      ),
      _react2.default.createElement(
        AboutBody,
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: '/static/images/about_logo.png' })
        ),
        _react2.default.createElement(
          'h2',
          { className: 'intro' },
          'Counter Histories: Rock Hill provides an intimate glimpse at an important moment in our history and ties it to the events of today.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          _react2.default.createElement(
            'p',
            null,
            '1961 comes to life through the first hand stories of the Friendship 9 in Counter Histories: Rock Hill, a thirty minute television documentary, directed by Fr3deR1cK Taylor, currently airing on PBS stations nationwide and on the Aspire! Network\u2019s American Black Film Festival Series. This film was born out of a collaboration with the ',
            _react2.default.createElement(
              'a',
              { href: 'https://www.southernfoodways.org/' },
              'Southern Foodways Alliance'
            ),
            ' counter histories project.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The film is also available in an hour format on Amazon, Google, Dish, Vudu, Vimeo, and Shaw. And is available for educational use through ',
            _react2.default.createElement(
              'a',
              { href: 'http://www.films.com/ecTitleDetail.aspx?TitleID=131013' },
              'Films Media Group (t)'
            ),
            '.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Meet the men who stood up for their rights at the counter of the Rock Hill, SC McCrory\u2019s Five and Dime. They asked for a cup of coffee and were instead met with violence, police brutality and unjust imprisonment. These students of Friendship College took on the weight of discrimination. They were the test case for the \u201CJail No Bail\u201D strategy that would re-invigorate the Civil Rights movement.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The courage of these men ignited a passion and furor that rose into the famed Freedom Rides, and brought the United States closer to major Civil Rights reform in 1964 and 1965. Counter Histories: Rock Hill provides an intimate look at an important moment in our history and resonates with current audiences still battling for equal treatment and rights.'
          )
        )
      ),
      _react2.default.createElement(
        FriendshipNine,
        null,
        _react2.default.createElement(
          Title,
          null,
          'The Friendship 9'
        ),
        _react2.default.createElement(
          'div',
          { className: 'cast' },
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'Clarence Graham'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'Willie McCleod'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'James Wells'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'W.T. "Dub" Massey'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'Thomas Gaither'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'John Gaines'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'Mack Workman'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'Robert McCullough'
          ),
          _react2.default.createElement(
            'div',
            { className: 'member' },
            'David Williamson Jr.'
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
            'This is a documentary that should be screened at every school in the nation.'
          ),
          _react2.default.createElement(
            'cite',
            null,
            'Holloywood RedCarpet Report'
          )
        )
      )
    )
  );
};