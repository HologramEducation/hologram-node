var assert = require('assert');

const TEST_ACCOUNT = require('./test_data')

var HologramAPI = require('../lib')(TEST_ACCOUNT.APIKEY, {
  host: TEST_ACCOUNT.HOST,
  version: TEST_ACCOUNT.VERSION,
  orgid: TEST_ACCOUNT.ORGID,
  testmode: true
});

describe('Device: ', function() {

  describe('getDevices method', function() {

    it(`it should successfully complete with devices.`, function(done) {

      HologramAPI.Device.getAll()
        .then((devices) => {
          assert(devices.length > 0, "No devices returned");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

    it(`it should handle a limit option`, function(done) {

      HologramAPI.Device.getAll({ limit: 0 })
        .then((devices) => {
          assert(devices.length === 0, "No devices returned");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

    it(`it should handle a startafter option`, function(done) {

      HologramAPI.Device.getAll({ startafter: TEST_ACCOUNT.DEVICES[0].id })
        .then((devices) => {
          assert(devices.length === 0);
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getDevice method', function() {

    it(`it should successfully complete with a device.`, function(done) {

      HologramAPI.Device.getOne(TEST_ACCOUNT.DEVICES[0].id)
        .then((device) => {
          assert(device, "No device returned");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

    it(`it should return an error if device doesn't exist.`, function(done) {

      HologramAPI.Device.getOne(123123)
        .catch((e) => {
          assert(e === "Invalid Device ID");
          done();
        });

    });

    it(`it should return an error when device id is not a number`, function(done) {

      HologramAPI.Device.getOne("12312sdf3")
        .catch((e) => {
          assert(e === "API method does not exist");
          done();
        });

    });

  });

  describe('getRouterCreds method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.getRouterCreds(TEST_ACCOUNT.DEVICES[0].id)
        .then((billing) => {
          assert(billing, "No device returned");
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('genRouterCreds method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.genRouterCreds(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('linkTag method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.linkTag(TEST_ACCOUNT.TAGS[0].id, [TEST_ACCOUNT.DEVICES[0].id])
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('unlinkTag method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.unlinkTag(TEST_ACCOUNT.TAGS[0].id, [TEST_ACCOUNT.DEVICES[0].id])
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('changeName method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.changeName(TEST_ACCOUNT.DEVICES[0].id, "YOLO")
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('sendData method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.sendData([TEST_ACCOUNT.DEVICES[0].id], "test message", "1234", "TCP")
        .then((mockData) => {

          assert(mockData.url === "https://knkdt.com/api/1/devices/messages?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === `{"deviceids":[138],"data":"test message","port":"1234","protocol":"TCP"}`);

          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('sendDataViaWebhook method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.sendDataViaWebhook(TEST_ACCOUNT.DEVICES[0].id, "1a2b3cd4", "test message")
        .then((mockData) => {

          assert(mockData.url === "https://knkdt.com/api/1/devices/messages/138/1a2b3cd4?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === `{"data":"test message"}`);

          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('getPhoneNumberCost method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.getPhoneNumberCost(TEST_ACCOUNT.DEVICES[0].id, "US")
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('addPhoneNumber method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.addPhoneNumber(TEST_ACCOUNT.DEVICES[0].id, "US", { areacode: "312"})
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('sendSMS method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.sendSMS(TEST_ACCOUNT.DEVICES[0].id, "test message", {fromnumber: "1234567890"})
        .then((mockData) => {

          assert(mockData.url === "https://knkdt.com/api/1/sms/incoming/?apikey=9EfHdB5dNN82M6PRV2YyfFC6r5Xprd&orgid=1206");
          assert(mockData.method === "post");
          assert(JSON.stringify(mockData.body) === `{"deviceid":138,"body":"test message","fromnumber":"1234567890"}`);

          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('removePhoneNumber method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.removePhoneNumber(TEST_ACCOUNT.DEVICES[0].id)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('setTunnelable method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.setTunnelable(TEST_ACCOUNT.DEVICES[0].id, true)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

  describe('setTunnelable method', function() {

    it(`it should successfully complete`, function(done) {

      HologramAPI.Device.setTunnelable(TEST_ACCOUNT.DEVICES[0].id, false)
        .then(() => {
          done();
        })
        .catch((e) => {
          done(e);
        });

    });

  });

});