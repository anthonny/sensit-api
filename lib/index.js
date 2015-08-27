import Client from './client';
import Authentication from './endpoints/authentication';
import Device from './endpoints/device';
import Devices from './endpoints/devices';
import Sensor from './endpoints/sensor';

class Sensit {
  constructor(params = {}, client = new Client(params)) {
    this.client = client;
  }

  setToken(token) {
    this.client.setToken(token);
  }

  auth() {
    return new Authentication({
      client: this.client
    });
  }
  device(id) {
    return new Device({
      id: id,
      client: this.client
    });
  }
  devices() {
    return new Devices({
      client: this.client
    });
  }
  sensor(deviceId, id) {
    return new Sensor({
      id: id,
      deviceId: deviceId,
      client: this.client
    });
  }
}

export default Sensit;
