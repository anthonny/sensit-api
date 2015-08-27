'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var Client = (function () {
  function Client() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Client);

    var defaultOptions = {
      headers: {
        'User-Agent': 'sendit-node (https://github.com/anthonny/sensit-api)'
      },
      timeout: 1500,
      endpoint: 'https://api.sensit.io',
      version: '/v1'
    };

    this.options = _lodash2['default'].assign(defaultOptions, options);

    if (options.token) {
      this.options.headers.Authorization = 'Bearer ' + options.token;
    }
  }

  _createClass(Client, [{
    key: 'setToken',
    value: function setToken(token) {
      this.options.token = token;
      if (token) {
        this.options.headers.Authorization = 'Bearer ' + token;
      }
    }
  }, {
    key: 'get',
    value: function get() {
      var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      var deferred = _q2['default'].defer();

      _superagent2['default'].get(this.options.endpoint + this.options.version + path).set(this.options.headers).end(function (err, res) {
        // Calling the end function will send the request
        if (err) {
          deferred.reject(err);
          return;
        }

        deferred.resolve(res.body);
      });

      return deferred.promise;
    }
  }, {
    key: 'post',
    value: function post() {
      var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var content = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var deferred = _q2['default'].defer();
      _superagent2['default'].post(this.options.endpoint + this.options.version + path).send(content).set(this.options.headers).end(function (err, res) {
        // Calling the end function will send the request
        if (err) {
          deferred.reject(err);
          return;
        }
        deferred.resolve(res.body);
      });

      return deferred.promise;
    }
  }]);

  return Client;
})();

exports['default'] = Client;
module.exports = exports['default'];