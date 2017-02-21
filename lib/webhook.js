module.exports = [
  {
    name: "get",
    category: "Webhook",
    path: "/devices/{deviceid}/webhook",
    method: "get",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    }]
  },
  {
    name: "create",
    category: "Webhook",
    path: "/devices/{deviceid}/webhook",
    method: "post",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    },{
      name: "port",
      type: "string",
      required: true,
      location: "body"
    },{
      name: "protocol",
      type: "string",
      required: true,
      location: "body"
    }]
  },
  {
    name: "update",
    category: "Webhook",
    path: "/devices/{deviceid}/webhook",
    method: "put",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    },{
      name: "port",
      type: "string",
      required: true,
      location: "body"
    },{
      name: "protocol",
      type: "string",
      required: true,
      location: "body"
    }]
  },
  {
    name: "regenerate",
    category: "Webhook",
    path: "/devices/{deviceid}/webhook/guid",
    method: "post",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    }]
  },
  {
    name: "remove",
    category: "Webhook",
    path: "/devices/{deviceid}/webhook",
    method: "delete",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    }]
  }
];