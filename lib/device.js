module.exports = [
  {
    name: "getOne",
    description: "Get one of your devices.",
    category: "Device",
    path: "/devices/{deviceid}",
    method: "get",
    debug: false,
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/devices/get-a-device",
    params: [{
      name: "deviceid",
      type: "string",
      required: true
    }]
  },
  {
    name: "getAll",
    path: "/devices",
    category: "Device",
    method: "get",
    debug: false,
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/devices/list-devices",
    params: [
      {
        name: "limit",
        type: "string",
        required: false,
        location: "querystring"
      },
      {
        name: "startafter",
        type: "string",
        required: false,
        location: "querystring"
      }
    ]
  },
  {
    name: "getRouterCreds",
    path: "/csr/sources/",
    category: "Device",
    method: "get",
    params: [
      {
        name: "deviceid",
        location: "querystring",
        required: true,
        type: "string"
      }
    ]
  },
  {
    name: "genRouterCreds",
    path: "/csr/sources/",
    category: "Device",
    method: "post",
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "linkTag",
    path: "/devices/tags/{tagid}/link",
    category: "Device",
    method: "post",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/link-a-device-to-a-tag",
    params: [
      {
        name: "tagid",
        required: true,
        type: "string"
      },
      {
        name: "deviceids",
        required: true,
        type: "array",
        location: "body"
      }
    ]
  },
  {
    name: "unlinkTag",
    path: "/devices/tags/{tagid}/unlink",
    category: "Device",
    method: "post",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/unlink-a-device-from-a-tag",
    params: [
      {
        name: "tagid",
        required: true,
        type: "string"
      },
      {
        name: "deviceids",
        required: true,
        type: "array",
        location: "body"
      }
    ]
  },
  {
    name: "changeName",
    path: "/devices/{deviceid}",
    category: "Device",
    method: "put",
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string"
      },
      {
        name: "name",
        required: true,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "sendSMS",
    path: "/sms/incoming/",
    category: "Device",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/sms/send-sms-to-a-device",
    method: "post",
    unitTest: true,
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "body",
        prettyName: "message",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "fromnumber",
        prettyName: "fromNumber",
        required: false,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "sendData",
    path: "/devices/messages",
    category: "Device",
    description: "Send a TCP or UDP message to one or more devices on the Hologram network. See the guide for details.",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/cloud-to-device-messaging/send-message-to-a-device",
    method: "post",
    unitTest: true,
    params: [
      {
        name: "deviceids",
        required: true,
        type: "array",
        location: "body"
      },
      {
        name: "data",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "port",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "protocol",
        required: true,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "sendDataViaWebhook",
    path: "/devices/messages/{deviceid}/{webhookguid}",
    category: "Device",
    unitTest: true,
    description: "This endpoint does not require authentication with your API key, as the webhook GUID serves as an authentication token. In order to generate a webhook URL, please visit the cloud configuration page for your device.",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/hologram-cloud/cloud-to-device-messaging/send-message-to-a-device-via-webhook",
    method: "post",
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string"
      },
      {
        name: "webhookguid",
        required: true,
        type: "string"
      },
      {
        name: "data",
        required: true,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "getPhoneNumberCost",
    path: "/devices/{deviceid}/addnumber",
    category: "Device",
    method: "post",
    debug: false,
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "country",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "areacode",
        value: "",
        type: "string",
        location: "body"
      },
      {
        name: "preview",
        value: "1",
        type: "string",
        location: "querystring"
      }
    ]
  },
  {
    name: "addPhoneNumber",
    path: "/devices/{deviceid}/addnumber",
    category: "Device",
    method: "post",
    debug: false,
    unitTest: true,
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "country",
        required: true,
        type: "string",
        location: "body"
      },
      {
        name: "areacode",
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "removePhoneNumber",
    path: "/devices/{deviceid}/removenumber",
    category: "Device",
    method: "post",
    debug: false,
    unitTest: true,
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "body"
      }
    ]
  },
  {
    name: "setTunnelable",
    path: "/devices/{deviceid}",
    category: "Device",
    method: "put",
    debug: false,
    params: [
      {
        name: "deviceid",
        required: true,
        type: "boolean",
        location: "body"
      },
      {
        name: "tunnelable",
        required: true,
        type: "boolean",
        location: "body"
      }
    ]
  }
];
