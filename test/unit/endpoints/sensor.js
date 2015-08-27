import assert from 'assert';
import client from '../fakeclient';
import Sensor from '../../../lib/endpoints/sensor';

describe('sensor', ()=> {

  it('should have a idDevice, a client and an id', () => {
    let sensor = new Sensor({
      id: '1',
      client: client,
      deviceId: '123'
    });

    assert.equal('1', sensor.id, 'Sensor should have the same id as param');
    assert.equal(client, sensor.client, 'Sensor should have the same client as the client in param');
    assert.equal('123', sensor.deviceId, 'Sensor should have the same deviceId as the deviceId in param');
  });

  it('should use the path /devices/{id} for get', (done) => {
    let sensor = new Sensor({
      id: '1',
      client: client,
      deviceId: '123'
    });

    sensor.get()
    .then((result)=>{
      assert.equal('/devices/123/sensors/1', result.path, 'Path should be /devices/${sensor.deviceId}/sensors/${sensor.id}');
      done();
    })
    .done();
  });
});
