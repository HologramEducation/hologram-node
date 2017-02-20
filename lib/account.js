module.exports = [
  {
    name: "me",
    description: "Gets current user information.",
    category: "Account",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/current-user/get-user-info",
    path: "/users/me",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "getBalance",
    category: "Account",
    description: "Retreive the current amount of credit you have on your account.",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/get-current-balance",
    path: "/organizations/{orgId}/balance",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "getBalanceHistory",
    description: "Retreive a history of transactions (credits and charges).",
    category: "Account",
    path: "/organizations/{orgId}/balancehistory",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/get-balance-history",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "getBillingInfo",
    category: "Account",
    description: "Retreive the truncated version of your selected payment method.",
    path: "/organizations/{orgId}/billing",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "getOrders",
    category: "Account",
    description: "Retreive the orders you have placed.",
    path: "/orders",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "addBalance",
    category: "Account",
    description: "Charge the user's configured billing source and add that amount to your account balance.",
    path: "/organizations/{orgId}/balance",
    debug: false,
    method: "post",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/add-balance",
    unitTest: true,
    params: [{
      name: "addamount",
      prettyName: "amountToAdd",
      type: "number",
      location: "body",
      required: true
    }]
  }

];
