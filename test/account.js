var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Account: ', function() {

  describe('me method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.me()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getBalance method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.getBalance()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getBalanceHistory method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.getBalanceHistory()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getBillingInfo method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.getBillingInfo()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getOrders method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.getOrders()
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('addBalance method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Account.addBalance(10)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});