var assert = require('assert');

const TEST_ACCOUNT = require('./test_data');

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Log: ', function() {
  describe('getAll method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Log.getAll()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getForDevice method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Log.getForDevice(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});


