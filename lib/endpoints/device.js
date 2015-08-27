import Sensor from './sensor';

class Device {

  constructor(params) {
    this.id = params.id;
    this.client = params.client;
  }

  get() {
    return this.client.get(`/devices/${this.id}`);
  }

  updateConfiguration(configuration) {
    return this.client.post(`/devices/${this.id}`, configuration);
  }

  sensor(id) {
    return new Sensor({id: id, deviceId: this.id, client: this.client});
  }

}

export default Device;
