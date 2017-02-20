var express = require('express');
var Moment = require('moment');
var app = express();

var Hologram = require('../../lib')("APIKEY", {
  orgid: "ORGID"
});

app.get('/device', function (req, res) {

  return Hologram.Device.getAll()
    .then((device) => {
      return res.json(device);
    })
    .catch((e) => {
      return res.json(e);
    });

});

app.get('/device/:deviceId', function (req, res) {

  return Hologram.Device.getOne(req.params.deviceId)
    .then((device) => {
      return res.json(device);
    })
    .catch((e) => {
      return res.json(e);
    });

});

// activate/pause/resume/usage

app.listen(3000, function () {
  console.log('Hologram API example server running at 3000!')
});
