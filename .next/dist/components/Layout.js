'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _taggedTemplateLiteral2 = require('/home/dre/workspaces/counterHistories.next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n'], ['\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n']);

var _react = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/home/dre/workspaces/counterHistories.next/node_modules/react/react.js');

var _link = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/home/dre/workspaces/counterHistories.next/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _analytics = require('../util/analytics');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _analytics.configureAnalytics)();

var Container = _styledComponents2.default.div(_templateObject);

// export default ({ children, title = 'Counter Histories: Rock Hill' }) => (
//   <Container>
//     <Head>
//       <title>{ title }</title>
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//     </Head>
//     <Header />
//     { children }
//     <Footer />
//   </Container>
// )

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _analytics.pageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            this.props.title
          ),
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
        ),
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);
  return Page;
}(_react3.Component);

Page.propTypes = {
  children: _react2.default.PropTypes.object.isRequired,
  title: _react2.default.PropTypes.string
};
exports.default = Page;