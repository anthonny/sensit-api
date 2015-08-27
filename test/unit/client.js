import assert from 'assert';
import Client from '../../lib/client';


describe('client', ()=> {

  let defaultOptions = {
    headers: {
      'User-Agent': 'sendit-node (https://github.com/anthonny/sensit-api)'
    },
    timeout: 1500,
    endpoint: 'https://api.sensit.io',
    version: '/v1'
  };

  it('should have a client', () => {
    let client = new Client({});
    assert.equal(JSON.stringify(defaultOptions), JSON.stringify(client.options), 'Client should have default options');
  });

  it('should have a function get()', () => {
    let client = new Client({});

    assert.equal('function', typeof client.get, 'Client should have a function get()');
  });

  it('should have a function post()', () => {
    let client = new Client({});

    assert.equal('function', typeof client.post, 'Client should have a function post()');
  });

});
