import assert from 'assert';
import client from '../fakeclient';
import Device from '../../../lib/endpoints/device';
import Sensor from '../../../lib/endpoints/sensor';

describe('device', () => {

  it('should have a client and an id', () => {
    let device = new Device({
      id: '1',
      client: client
    });

    assert.equal(client, device.client, 'Device should have the same client as the client in param');
    assert.equal('1', device.id, 'Device should have the same id as param');
  });

  it('should use the path /devices/{id} for get', (done) => {
    let device = new Device({
      id: '1',
      client: client
    });

    device.get()
    .then((result)=>{
      assert.equal(`/devices/${device.id}`, result.path, 'Path should be /devices/${device.id}');
      done();
    })
    .done();
  });

  it('should use the path /devices/{id} for updateConfiguration', (done) => {
    let device = new Device({
      id: '2',
      client: client
    });
    let content = {content: 'test'};
    device.updateConfiguration(content)
    .then((result)=>{
      assert.equal(`/devices/${device.id}`, result.path, 'Path should be /devices/${device.id}');
      assert.equal(content, result.content, 'Path should be /devices/${device.id}');

      done();
    })
    .done();
  });

  it('should return a Sensor with the good device id and client', () => {
    let device = new Device({
      id: '1337',
      client: client
    });

    assert.equal(Sensor, device.sensor('1234').constructor, 'it should return a Sensor object');
    assert.equal('1337', device.sensor('1234').deviceId, 'it should have the good device id');
    assert.equal(client, device.sensor('1234').client, 'it should have the good device id');
  });
});
