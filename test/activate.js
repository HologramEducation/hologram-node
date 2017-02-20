var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Activate: ', function() {

  describe('getPlans method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Activate.getPlans()
        .then((mockData) => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getPlan method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Activate.getPlan(57)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('previewActivate method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Activate.preview(["123", "456"], 75, 1, false)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/batchorder?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206&preview=1");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === `{"tasks":[{"endpoint":"/1/links/cellular/bulkclaim","params":{"plan":75,"sims":["123","456"],"tier":1}}],"useacctbalance":"0"}`);
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('activate method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Activate.activate(["123", "456"], 75, 1, false)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/batchorder?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === `{"tasks":[{"endpoint":"/1/links/cellular/bulkclaim","params":{"plan":75,"sims":["123","456"],"tier":1}}],"useacctbalance":"0"}`);
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});