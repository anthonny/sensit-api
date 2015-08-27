import Q from 'q';

export default {

  options: {
    token: 'old-token'
  },

  setToken: function (token) {
    this.options.token = token;
  },

  post: (path, content) => {
    var deferred = Q.defer();

    if (content.email === 'error') {
      deferred.reject(content.email);
    } else {
      deferred.resolve({path: path, content: content, token: 'my-token'});
    }

    return deferred.promise;
  },

  get: (path, error = false) => {
    var deferred = Q.defer();

    if (error) {
      deferred.reject('error');
    } else {
      deferred.resolve({path: path});
    }

    return deferred.promise;
  }
};
