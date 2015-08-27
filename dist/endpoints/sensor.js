"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sensor = (function () {
  function Sensor(params) {
    _classCallCheck(this, Sensor);

    this.id = params.id;
    this.deviceId = params.deviceId;
    this.client = params.client;
  }

  _createClass(Sensor, [{
    key: "get",
    value: function get() {
      return this.client.get("/devices/" + this.deviceId + "/sensors/" + this.id);
    }
  }]);

  return Sensor;
})();

exports["default"] = Sensor;
module.exports = exports["default"];