module.exports = [
  {
    name: "getPlans",
    category: "Activate",
    description: "The Data Plans endpoints return pricing and descriptions for the different data plans that Hologram offers. When changing the data plan for a cellular link via API, you must refer to the plan by its ID, which you can determine from these endpoints.",
    path: "/plans",
    debug: false,
    unitTest: false,
    method: "get",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/data-plans/list-data-plans",
    params: [{
      name: "enabled",
      value: "1",
      type: "string",
      location: "querystring"
    }, {
      name: "partnerId",
      value: "1",
      type: "string",
      location: "querystring"
    }, {
      name: "network",
      value: "2",
      type: "string",
      location: "querystring"
    }]
  },
  {
    name: "getPlan",
    category: "Activate",
    path: "/plans/{planId}",
    debug: false,
    unitTest: false,
    method: "get",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/data-plans/get-a-data-plan",
    params: [{
      name: "planId",
      type: "string",
      required: true
    }]
  },
  {
    name: "preview",
    category: "Activate",
    bodySchema: "activate",
    path: "/batchorder",
    description: "Preview the price and validity of an activation",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims",
    debug: false,
    unitTest: true,
    method: "post",
    params: [{
      name: "sims",
      type: "array",
      location: "body",
      required: true
    }, {
      name: "plan",
      type: "number",
      location: "body",
      required: true
    }, {
      name: "zone",
      type: "string",
      location: "body",
      required: true
    }, {
      name: "useacctbalance",
      prettyName: "useAccountBalance",
      type: "boolean",
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
    name: "activate",
    category: "Activate",
    bodySchema: "activate",
    path: "/batchorder",
    description: "Activate the selected sims.  Charges your configured billing method. ",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/cellular-links/activate-sims",
    debug: true,
    unitTest: true,
    method: "post",
    params: [{
      name: "sims",
      type: "array",
      location: "body",
      required: true
    }, {
      name: "plan",
      type: "number",
      location: "body",
      required: true
    }, {
      name: "zone",
      type: "string",
      location: "body",
      required: true
    }, {
      name: "useacctbalance",
      prettyName: "useAccountBalance",
      type: "boolean",
      location: "body",
      required: true
    }]
  },
];
