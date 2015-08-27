class Sensor {

  constructor(params) {
    this.id = params.id;
    this.deviceId = params.deviceId;
    this.client = params.client;
  }

  get() {
    return this.client.get(`/devices/${this.deviceId}/sensors/${this.id}`);
  }
}

export default Sensor;
