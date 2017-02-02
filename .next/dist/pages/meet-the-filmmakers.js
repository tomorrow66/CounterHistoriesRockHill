'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #030202;\n  padding: 0 5% 40px;\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  @media (min-width: 768px) {\n    padding: 0 20% 40px;\n  }\n\n  .name {\n    color: #d99518;\n    font-size: 20px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n  p {\n    font-size: 14px;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #030202;\n  padding: 0 5% 40px;\n  border-bottom: 10px solid rgba(26,115,99,1);\n\n  @media (min-width: 768px) {\n    padding: 0 20% 40px;\n  }\n\n  .name {\n    color: #d99518;\n    font-size: 20px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n  p {\n    font-size: 14px;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/mtf_tpi_logo_section.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 20px;\n  position: relative;\n\n  @media (min-width: 768px) {\n\n  }\n\n  .overlay {\n    background-color: rgba(47,50,64, .85);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width:100%;\n    height: 100%;\n    z-index: 1;\n  }\n\n  .tpi_logo {\n    width: 35%;\n    @media (min-width: 768px) {\n      width: 25%;\n    }\n  }\n\n  a {\n    display: block;\n    width: 300px;\n    z-index: 10;\n  }\n  .cta {\n    font-size: 14px;\n    color: #fff;\n    z-index: 10;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n    a {\n      display: inline;\n      color: #d99518;\n      text-decoration: none;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(/static/images/mtf_tpi_logo_section.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding: 20px;\n  position: relative;\n\n  @media (min-width: 768px) {\n\n  }\n\n  .overlay {\n    background-color: rgba(47,50,64, .85);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width:100%;\n    height: 100%;\n    z-index: 1;\n  }\n\n  .tpi_logo {\n    width: 35%;\n    @media (min-width: 768px) {\n      width: 25%;\n    }\n  }\n\n  a {\n    display: block;\n    width: 300px;\n    z-index: 10;\n  }\n  .cta {\n    font-size: 14px;\n    color: #fff;\n    z-index: 10;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n    a {\n      display: inline;\n      color: #d99518;\n      text-decoration: none;\n    }\n  }\n']);

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

var _Gallery = require('../components/Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilmmakersBio = _styledComponents2.default.section(_templateObject);

var LogoSection = _styledComponents2.default.div(_templateObject2);

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { title: 'Meet the Filmmakers' },
    _react2.default.createElement(
      _PageSection2.default,
      null,
      _react2.default.createElement(
        _Banner2.default,
        { img: '/static/images/mtf_banner.jpg' },
        _react2.default.createElement(
          _BannerTitle2.default,
          null,
          'Meet',
          _react2.default.createElement('br', null),
          'The Filmmakers'
        ),
        _react2.default.createElement(
          _BannerTitle.BannerSpan,
          null,
          'Counter Histories: Rock Hill'
        )
      ),
      _react2.default.createElement(
        FilmmakersBio,
        null,
        _react2.default.createElement('img', { src: '/static/images/mtf_fred.jpg' }),
        _react2.default.createElement(
          'h3',
          { className: 'name' },
          'Fr3der1ck Taylor'
        ),
        _react2.default.createElement(
          'p',
          { className: 'bio' },
          'Hi, I\u2019m Fr3dR1cK Taylor, a Chicago native with a passion for documenting amazing stories. I\u2019ve been around the world, telling stories about people and the challenges they face. The idea of inspiring audiences through true stories of people doing extraordinary things serves as a source of endless inspiration for me. I endeavor to make films that ask thought provoking questions, teach us something and entertain us in the process. I also bring this sensibility to my client based work, and specialize in real people projects, music artist based work and social justice themed pieces. The more global the better, as our world keeps getting smaller the opportunities to share information and affect change keep getting bigger.'
        )
      ),
      _react2.default.createElement(
        FilmmakersBio,
        null,
        _react2.default.createElement('img', { src: '/static/images/mtf_ellen.jpg' }),
        _react2.default.createElement(
          'h3',
          { className: 'name' },
          'Ellen Barnard'
        ),
        _react2.default.createElement(
          'p',
          { className: 'bio' },
          'As Executive Producer, my main role is to turn ideas into polished productions that deliver results for our clients. Part production guru, part strategic enthusiast, I enjoy thinking through the details that lead to great execution. I have a marketing background & a few great industry awards. I have been partnering with Fr3deR1cK as a producer, helming award winning projects around the globe for almost 20 years. Four years in Chapel Hill, NC at UNC taught me that \u201CGo Heels!\u201D has nothing to do with shoes, and I hold a Master\u2019s degree in cultural history from Emory University. I am a huge fan of liberal arts degrees. And I am awed by the endless opportunity to be creative that the digital age brings us.'
        )
      ),
      _react2.default.createElement(
        LogoSection,
        null,
        _react2.default.createElement('div', { className: 'overlay' }),
        _react2.default.createElement(
          'a',
          { className: 'tpi_logo', href: 'http://tomorrowpictures.com' },
          _react2.default.createElement('img', { src: '/static/images/tpi_logo.svg' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'cta' },
          'The story is in the telling. Let us help you tell yours. ',
          _react2.default.createElement(
            'a',
            { href: 'http://tomorrowpictures.com', target: '_blank' },
            'Click here to learn more about Tomorrow Pictures.'
          )
        )
      ),
      _react2.default.createElement(
        _Gallery2.default,
        null,
        _react2.default.createElement('img', { src: '/static/images/mtf_gallery1.jpg' }),
        _react2.default.createElement('img', { src: '/static/images/mtf_gallery2.jpg' })
      )
    )
  );
};