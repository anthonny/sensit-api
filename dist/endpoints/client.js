'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ = require('_');

var Client = function Client() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Client);

  var defaultParams = {
    headers: {
      'User-Agent': 'sendit-node (https://github.com/anthonny/sensit-api)'
    },
    endpoint: 'https://api.sensit.io',
    version: '/v1'
  };

  this.token = params.token;
  this.params = _.assign(defaultParams, params);
};

exports.Client = Client;