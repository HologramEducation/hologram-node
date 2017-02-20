var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Webhook: ', function() {

  describe('create', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Webhook.create(TEST_ACCOUNT.DEVICES[0].id, 1234, "TCP")
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('get method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Webhook.get(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('update', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Webhook.update(TEST_ACCOUNT.DEVICES[0].id, 12345, "TCP")
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('regenerate', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Webhook.regenerate(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('remove', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Webhook.remove(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});