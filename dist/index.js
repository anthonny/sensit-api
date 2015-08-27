'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _endpointsAuthentication = require('./endpoints/authentication');

var _endpointsAuthentication2 = _interopRequireDefault(_endpointsAuthentication);

var _endpointsDevice = require('./endpoints/device');

var _endpointsDevice2 = _interopRequireDefault(_endpointsDevice);

var _endpointsDevices = require('./endpoints/devices');

var _endpointsDevices2 = _interopRequireDefault(_endpointsDevices);

var _endpointsSensor = require('./endpoints/sensor');

var _endpointsSensor2 = _interopRequireDefault(_endpointsSensor);

var Sensit = (function () {
  function Sensit() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var client = arguments.length <= 1 || arguments[1] === undefined ? new _client2['default'](params) : arguments[1];
    return (function () {
      _classCallCheck(this, Sensit);

      this.client = client;
    }).apply(this, arguments);
  }

  _createClass(Sensit, [{
    key: 'setToken',
    value: function setToken(token) {
      this.client.setToken(token);
    }
  }, {
    key: 'auth',
    value: function auth() {
      return new _endpointsAuthentication2['default']({
        client: this.client
      });
    }
  }, {
    key: 'device',
    value: function device(id) {
      return new _endpointsDevice2['default']({
        id: id,
        client: this.client
      });
    }
  }, {
    key: 'devices',
    value: function devices() {
      return new _endpointsDevices2['default']({
        client: this.client
      });
    }
  }, {
    key: 'sensor',
    value: function sensor(deviceId, id) {
      return new _endpointsSensor2['default']({
        id: id,
        deviceId: deviceId,
        client: this.client
      });
    }
  }]);

  return Sensit;
})();

exports['default'] = Sensit;
module.exports = exports['default'];