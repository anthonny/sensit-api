class Devices {

  constructor(params) {
    this.client = params.client;
  }

  get() {
    return this.client.get('/devices');
  }

}

export default Devices;
