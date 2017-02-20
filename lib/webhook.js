module.exports = [
  {
    name: "get",
    category: "Webhook",
    path: "/devices/{deviceId}/webhook",
    method: "get",
    params: [{
      name: "deviceId",
      type: "string",
      required: true
    }]
  },
  {
    name: "create",
    category: "Webhook",
    path: "/devices/{deviceId}/webhook",
    method: "post",
    params: [{
      name: "deviceId",
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
    path: "/devices/{deviceId}/webhook",
    method: "put",
    params: [{
      name: "deviceId",
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
    path: "/devices/{deviceId}/webhook/guid",
    method: "post",
    params: [{
      name: "deviceId",
      type: "string",
      required: true
    }]
  },
  {
    name: "remove",
    category: "Webhook",
    path: "/devices/{deviceId}/webhook",
    method: "delete",
    params: [{
      name: "deviceId",
      type: "string",
      required: true
    }]
  }
];