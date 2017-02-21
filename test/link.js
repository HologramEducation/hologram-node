var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Link: ', function() {

  describe('getAll method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.getAll()
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

      HologramAPI.Link.getOne(TEST_ACCOUNT.DEVICES[0].linkid)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getLinkUsage method', function() {

    it(`it should successfully complete with usage data.`, function(done) {

      HologramAPI.Link.getUsage(TEST_ACCOUNT.DEVICES[0].linkid, {})
        .then((usage) => {
          assert(usage, "No device returned");
          done();
        })
        .catch((e) => {
          done(e);s
        });

    });

    it(`it successfully returns an empty array even if linkid doesn't exist.`, function(done) {

      HologramAPI.Link.getUsage(123123123123123, {})
        .then((usage) => {
          assert(usage.length === 0);
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('setOverageLimit method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.setOverageLimit(TEST_ACCOUNT.DEVICES[0].linkid, 1000)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getStatusHistory method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.getStatusHistory(TEST_ACCOUNT.DEVICES[0].linkid)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('pause method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.pause(TEST_ACCOUNT.DEVICES[0].linkid)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/links/cellular/231675/state?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(mockData.body.state === "pause");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('resume method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.resume(TEST_ACCOUNT.DEVICES[0].linkid)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/links/cellular/231675/state?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(mockData.body.state === "live");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('changePlanPreview method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.changePlanPreview(TEST_ACCOUNT.DEVICES[0].linkid, 75, 2)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/links/cellular/231675/changeplan?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206&preview=1");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === '{"planid":75,"tier":2}');
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('changePlan method', function() {

    it(`it should successfully complete.`, function(done) {

      HologramAPI.Link.changePlan(TEST_ACCOUNT.DEVICES[0].linkid, 75, 2)
        .then((mockData) => {
          assert(mockData.url === "https://knkdt.com/api/1/links/cellular/231675/changeplan?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === '{"planid":75,"tier":2}');
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });


});