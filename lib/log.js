module.exports = [
  {
    name: "getAll",
    category: "Log",
    path: "/csr/rdm",
    method: "get",
    params: [
      {
        name: "deviceid",
        type: "string",
        location: "querystring"
      }
    ]
  },
  {
    name: "getForDevice",
    path: "/csr/rdm",
    category: "Log",
    method: "get",
    params: [
      {
        name: "deviceid",
        required: true,
        type: "string",
        location: "querystring"
      }
    ]
  }
]