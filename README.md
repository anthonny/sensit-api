# sensit-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Javascript API wrapper for the Sens&#39;it API


## Install

```sh
$ npm install --save sensit-api
```


## Usage

```js
var Sensit = require('sensit-api');

// If you do not want to use the token
// You will can use credentials with the function  auth().getToken(credentials)
var client = new Sensit();

// You can also use the token :)
var client = new Sensit({token: 'my-token'});
```

### Authentication

#### getToken

You can use your credentials to get your access token:
```js
var credentials = {
  email: 'my@email.com',
  password: 'my-clear-password'
};

client.auth()
  .getToken(credentials)
  .then(function (result) {
    console.log(result.data.token);
  });
```

#### setToken

And you can set the token and the client will it for your next requests:
```js
var credentials = {
  email: 'my@email.com',
  password: 'my-clear-password'
};

client.auth()
  .getToken(credentials)
  .then(function (result) {
    client.setToken(result.data.token);

    return client.devices().get()
  })
  .then(function(result) {
    console.log(result);
  });
```

### Devices

#### get
```js
client.devices().get()
  .then(function (result) {
    console.log(result);
  });
```

### Device

#### get
```js
var deviceId = '1234';

client.device(deviceId).get()
  .then(function (result) {
    console.log(result);
  });
```

#### updateConfiguration
```js
var deviceId = '1234';
var aConfiguration = {
  ...
};

client.device(deviceId)
  .updateConfiguration(aConfiguration)
  .then(function (result) {
    console.log(result);
  });
```

### Sensor

#### get
```js
var deviceId = '1234';
var sensorId = '5678';

client.sensor(deviceId, sensorId).get()
  .then(function (result) {
    console.log(result);
  });

client.device(deviceId).sensor(sensorId).get()
  .then(function (result) {
    console.log(result);
  });
```


## License

MIT © [Anthonny Querouil](http://anthonnyquerouil.fr) ([@anthonny_q](http://twitter.com/anthonny_q))


[npm-image]: https://badge.fury.io/js/sensit-api.svg
[npm-url]: https://npmjs.org/package/sensit-api
[travis-image]: https://travis-ci.org/anthonny/sensit-api.svg?branch=master
[travis-url]: https://travis-ci.org/anthonny/sensit-api
[daviddm-image]: https://david-dm.org/anthonny/sensit-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/anthonny/sensit-api
[coveralls-image]: https://coveralls.io/repos/anthonny/sensit-api/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/anthonny/sensit-api?branch=master
