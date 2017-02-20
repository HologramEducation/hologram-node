var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Org: ', function() {

  describe('getAll method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Org.getAll()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getOne method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Org.getOne(TEST_ACCOUNT.ANOTHER_ORG)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getPending method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Org.getPending()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});