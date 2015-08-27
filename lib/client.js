import _ from 'lodash';
import Q from 'q';
import request from 'superagent';

class Client {

  constructor(options = {}) {
    let defaultOptions = {
      headers: {
        'User-Agent': 'sendit-node (https://github.com/anthonny/sensit-api)'
      },
      timeout: 1500,
      endpoint: 'https://api.sensit.io',
      version: '/v1'
    };

    this.options = _.assign(defaultOptions, options);

    if (options.token) {
      this.options.headers.Authorization = `Bearer ${options.token}`;
    }
  }

  setToken(token) {
    this.options.token = token;
    if (token) {
      this.options.headers.Authorization = `Bearer ${token}`;
    }
  }

  get(path = '') {
    const deferred = Q.defer();

    request
      .get(this.options.endpoint + this.options.version + path)
      .set(this.options.headers)
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) {
          deferred.reject(err);
          return;
        }

        deferred.resolve(res.body);
      });


    return deferred.promise;
  }

  post(path = '', content = {}) {
    const deferred = Q.defer();
    request
      .post(this.options.endpoint + this.options.version + path)
      .send(content)
      .set(this.options.headers)
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) {
          deferred.reject(err);
          return;
        }
        deferred.resolve(res.body);
      });

    return deferred.promise;
  }

}

export default Client;
