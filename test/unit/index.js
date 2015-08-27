import assert from 'assert';
import client from './fakeclient';
import Sensit from '../../lib/index';
import Authentication from '../../lib/endpoints/authentication';
import Device from '../../lib/endpoints/device';
import Devices from '../../lib/endpoints/devices';
import Sensor from '../../lib/endpoints/sensor';

describe('Sensit', ()=> {

  it('should have a client', () => {
    let sensit = new Sensit({}, client);

    assert.equal(client, sensit.client, 'Sensit should have the same client as the client in param');
  });

  it('should have a function setToken()', () => {
    let sensit = new Sensit({}, client);

    assert.equal(typeof sensit.setToken, 'function', 'The value of setToken() should be a function');
  });

  it('should set a new token to the client', () => {
    let sensit = new Sensit({}, client);

    assert.equal(sensit.client.options.token, 'old-token', 'The value of the token of the client has not changed');

    sensit.setToken('my-token');

    assert.equal(sensit.client.options.token, 'my-token', 'The value of the token of the client has changed');
  });

  it('should have a function auth()', () => {
    let sensit = new Sensit({}, client);

    assert.equal(Authentication, sensit.auth().constructor, 'The value of auth() should be an instance of Authentication');
  });

  it('should have a function devices()', () => {
    let sensit = new Sensit({}, client);

    assert.equal(Devices, sensit.devices().constructor, 'The value of devices() should be an instance of Devices');
  });

  it('should have a function device()', () => {
    let sensit = new Sensit({}, client);

    assert.equal(Device, sensit.device().constructor, 'The value of device() should be an instance of Device');
  });

  it('should have a function device()', () => {
    let sensit = new Sensit({}, client);

    let device = sensit.device('1');

    assert.equal('1', device.id, 'The value of the id must set in the device object');
  });

  it('should have a function sensor()', () => {
    let sensit = new Sensit({}, client);

    assert.equal(Sensor, sensit.sensor().constructor, 'The value of sensor() should be an instance of Sensor');
  });

  it('should have a function sensor()', () => {
    let sensit = new Sensit({}, client);

    let sensor = sensit.sensor('1', '2');

    assert.equal('1', sensor.deviceId, 'The value of the deviceId must set in the sensor object');
    assert.equal('2', sensor.id, 'The value of the id must set in the sensor object');
  });
});
