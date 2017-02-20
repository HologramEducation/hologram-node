module.exports = [
  {
    name: "getAll",
    category: "Tag",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/list-device-tags",
    path: "/devices/tags",
    method: "get",
    params: []
  },
  {
    name: "create",
    category: "Tag",
    path: "/devices/tags",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/create-a-device-tag",
    method: "post",
    params: [{
      name: "name",
      type: "string",
      required: true,
      location: "body"
    }]
  },
  {
    name: "update",
    category: "Tag",
    debug: false,
    path: "/devices/tags/{tagId}/updatetagname/",
    method: "put",
    params: [{
      name: "tagId",
      type: "string",
      required: true
    }, {
        name: "name",
        type: "string",
        required: true,
        location: "body"
    }]
  },
  {
    name: "remove",
    category: "Tag",
    path: "/devices/tags/{tagId}",
    method: "delete",
    docLink: "https://hologram.io/docs/reference/cloud/http#/reference/device-management/device-tags/delete-a-device-tag",
    params: [{
      name: "tagId",
      type: "string",
      required: true
    }]
  },
  // {
  //   name: "assign",
  //   category: "Tag",
  //   path: "/devices/{deviceId}/webhook",
  //   method: "delete",
  //   params: [{
  //     name: "deviceId",
  //     type: "string",
  //     required: true
  //   }]
  // }
];