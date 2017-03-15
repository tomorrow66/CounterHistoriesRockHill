'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _document = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

require('../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          _document.Head,
          null,
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans' }),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.style } })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(_document.Main, null),
          _react2.default.createElement(_document.NextScript, null),
          _react2.default.createElement(
            'noscript',
            null,
            _react2.default.createElement('img', { height: '1', width: '1',
              src: 'https://www.facebook.com/tr?id=2208160469408450&ev=PageView&noscript=1' })
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var renderPage = _ref2.renderPage;
        var page, style;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = renderPage();
                style = _styledComponents.styleSheet.getCSS();
                return _context.abrupt('return', (0, _extends3.default)({}, page, { style: style }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;