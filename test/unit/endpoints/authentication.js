import assert from 'assert';
import sha1 from 'sha1';
import client from '../fakeclient';
import Authentication from '../../../lib/endpoints/authentication';

describe('authentication', () => {

  it('should have a client', () => {
    let auth = new Authentication({
      client: client
    });

    assert.equal(client, auth.client, 'Auth should have the same client as the client in param');
  });

  it('should use the path /auth', (done) => {
    const PATH = '/auth';
    let auth = new Authentication({
      client: client
    });

    auth.getToken({
      email: 'my@email.com',
      password: 'mypass'
    })
    .then((result)=>{
      assert.equal(PATH, result.path, `Path should be ${PATH}`);
      done();
    })
    .done();
  });

  it('should sha1 the password', function (done) {
    let auth = new Authentication({
      client: client
    });

    auth.getToken({
      email: 'my@email.com',
      password: 'mypass'
    })
    .then((result) => {
      assert.equal(sha1('mypass'), result.content.password, 'The password should be crypted with sha1');
      done();
    })
    .done();

  });

  it('should catch error', function (done) {
    let auth = new Authentication({
      client: client
    });

    auth.getToken({
      email: 'error',
      password: 'mypass'
    })
    .then(() => {
      done(new Error('it should throw an error'));
    })
    .catch((error) => {
      assert.equal('error', error, 'it has thrown an Error');
      done();
    })
    .done();
  });

});
