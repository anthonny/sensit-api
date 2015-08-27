import sha1 from 'sha1';

class Authentication {
  constructor(params) {
    this.client = params.client;
  }

  getToken(credentials) {
    return this.client.post('/auth', {
      email: credentials.email,
      password: sha1(credentials.password)
    });
  }

}

export default Authentication;
