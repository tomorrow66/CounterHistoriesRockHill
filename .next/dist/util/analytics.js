'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureAnalytics = configureAnalytics;
exports.pageView = pageView;
var IS_SERVER = typeof window === 'undefined';
var IS_BROWSER = !IS_SERVER;

var ReactGA = void 0;
if (IS_BROWSER) {
  ReactGA = require('react-ga'); // eslint-disable-line global-require
}

function configureAnalytics() {
  if (IS_BROWSER) {
    ReactGA.initialize('UA-45740428-6');

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = '2.0';
      n.queue = [];t = b.createElement(e);t.async = !0;
      t.src = v;s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2208160469408450');
  }
}

function pageView() {
  if (IS_BROWSER) {
    var page = window.location.pathname;
    ReactGA.set({ page: page });
    ReactGA.pageview(page);
    fbq('track', 'PageView');
  }
}