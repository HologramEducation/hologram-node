module.exports = [
  {
    name: "getAll",
    category: "Org",
    description: "List all organizations that you are a member of. This includes the special \"personal\" organization tied to your user.",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/user-account-balance/list-organizations",
    path: "/organizations",
    debug: false,
    method: "get",
    params: []
  },
  {
    name: "getOne",
    category: "Org",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/account-management/organizations/get-an-organization",
    path: "/organizations/{orgid}",
    debug: false,
    method: "get",
    params: [
      {
        name: "orgid",
        required: true,
        type: "string"
      }
    ]
  },
  {
    name: "getPending",
    category: "Org",
    path: "/organizations/pending/",
    debug: false,
    method: "get",
    params: []
  },

];
