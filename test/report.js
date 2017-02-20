var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Report: ', function() {

  describe('billing method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Report.billing()
        .then((devices) => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('device method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Report.devices(TEST_ACCOUNT.DEVICES[0].id)
        .then((device) => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});