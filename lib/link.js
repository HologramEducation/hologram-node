module.exports = [
  {
    name: "getAll",
    category: "Link",
    path: "/links/cellular",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/list-cellular-links",
    method: "get",
    debug: false,
    params: []
  },
  {
    name: "getOne",
    category: "Link",
    path: "/links/cellular/{linkId}",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/get-cellular-link",
    method: "get",
    debug: false,
    params: [
      {
        name: "linkId",
        type: "string",
        required: true
      }
    ]
  },
  {
    name: "getUsage",
    category: "Link",
    path: "/usage/data",
    method: "get",
    params: [{
      name: "linkid",
      type: "string",
      required: true,
      location: "querystring"
    }]
  },
  {
    name: "pause",
    category: "Link",
    path: "/links/cellular/{linkid}/state",
    method: "post",
    unitTest: true,
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/pause-or-unpause-data",
    params: [
      {
        name: "linkid",
        type: "string",
        required: true
      },
      {
        name: "state",
        type: "string",
        value: "pause",
        location: "body"
      }
    ]
  },
  {
    name: "resume",
    category: "Link",
    path: "/links/cellular/{linkid}/state",
    method: "post",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/pause-or-unpause-data",
    unitTest: true,
    params: [
      {
        name: "linkid",
        type: "string",
        required: true
      },
      {
        name: "state",
        type: "string",
        value: "live",
        location: "body"
      }
    ]
  },
  {
    name: "setOverageLimit",
    category: "Link",
    path: "/links/cellular/{linkId}/overagelimit",
    method: "post",
    debug: false,
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/change-overage-limit",
    params: [
      {
        name: "linkId",
        type: "string",
        required: true
      },
      {
        name: "limit",
        type: "string",
        location: "body",
        required: true
      }
    ]
  },
  {
    name: "getStatusHistory",
    category: "Link",
    path: "/links/cellular/{linkId}/history",
    method: "get",
    debug: false,
    params: [
      {
        name: "linkId",
        type: "string",
        required: true
      }
    ]
  },
  {
    name: "changePlanPreview",
    category: "Link",
    path: "/links/cellular/{linkid}/changeplan",
    description: "Preview costs and information of changing a links plan .  ",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims",
    debug: true,
    unitTest: true,
    method: "post",
    params: [{
      name: "linkid",
      type: "string",
      required: true
    }, {
      name: "planid",
      type: "number",
      location: "body",
      required: true
    }, {
      name: "tier",
      prettyName: "zone",
      type: "string",
      location: "body",
      required: true
    }, {
      name: "preview",
      value: "1",
      type: "string",
      location: "querystring",
    }]
  },
  {
    name: "changePlan",
    category: "Link",
    path: "/links/cellular/{linkid}/changeplan",
    description: "Change the plan of a selected cellular link.  Charges your user balance. ",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims",
    debug: true,
    unitTest: true,
    method: "post",
    params: [{
      name: "linkid",
      type: "string",
      required: true
    }, {
      name: "planid",
      type: "number",
      location: "body",
      required: true
    }, {
      name: "tier",
      prettyName: "zone",
      type: "string",
      location: "body",
      required: true
    }]
  }
];
