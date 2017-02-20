var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Tag: ', function() {

  var tagId;
  
  describe('getAll', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Tag.getAll()
        .then((tags) => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('create', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Tag.create("test")
        .then((data) => {
          tagId = data.tags[0].id;
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('update', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Tag.update(tagId, "wowowowow")
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

      HologramAPI.Tag.remove(tagId)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});