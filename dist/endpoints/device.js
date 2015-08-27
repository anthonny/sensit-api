'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sensor = require('./sensor');

var _sensor2 = _interopRequireDefault(_sensor);

var Device = (function () {
  function Device(params) {
    _classCallCheck(this, Device);

    this.id = params.id;
    this.client = params.client;
  }

  _createClass(Device, [{
    key: 'get',
    value: function get() {
      return this.client.get('/devices/' + this.id);
    }
  }, {
    key: 'updateConfiguration',
    value: function updateConfiguration(configuration) {
      return this.client.post('/devices/' + this.id, configuration);
    }
  }, {
    key: 'sensor',
    value: function sensor(id) {
      return new _sensor2['default']({ id: id, deviceId: this.id, client: this.client });
    }
  }]);

  return Device;
})();

exports['default'] = Device;
module.exports = exports['default'];