'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sha1 = require('sha1');

var _sha12 = _interopRequireDefault(_sha1);

var Authentication = (function () {
  function Authentication(params) {
    _classCallCheck(this, Authentication);

    this.client = params.client;
  }

  _createClass(Authentication, [{
    key: 'getToken',
    value: function getToken(credentials) {
      return this.client.post('/auth', {
        email: credentials.email,
        password: (0, _sha12['default'])(credentials.password)
      });
    }
  }]);

  return Authentication;
})();

exports['default'] = Authentication;
module.exports = exports['default'];