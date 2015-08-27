import assert from 'assert';
import client from '../fakeclient';
import Devices from '../../../lib/endpoints/devices';


describe('devices', () => {

  it('should have a client', () => {
    let devices = new Devices({
      client: client
    });

    assert.equal(client, devices.client, 'Devices should have the same client as the client in param');
  });

  it('should use the path /devices for get', (done) => {
    let devices = new Devices({
      client: client
    });

    devices.get()
    .then((result)=>{
      assert.equal('/devices', result.path, 'Path should be /devices');
      done();
    })
    .done();
  });
});
