var needle = require('needle');
var _ = require('lodash');
var queryUtils = require('query-string');
var deepClone = require('deep-clone');

/**
 The Hologram API client
 @constructor
 @param {string} apikey - The apikey as seen on the Hologram dashboard
 @param {object} options (optional) - optional config for the client
 - @member {string} host - host for the Hologram API (default: https://dashboard.hologram.io)
 - @member {string} version - The api version number
 - @member {string} orgid - The org id as seen on the dashboard.
 */
var HoloClient = function(options) {

  if (!options) {
    options = {};
  }

  this.buildConfig(options);

  this.buildAPIWithConfig(require('./device'));
  this.buildAPIWithConfig(require('./link'));
  this.buildAPIWithConfig(require('./report'));
  this.buildAPIWithConfig(require('./log'));
  this.buildAPIWithConfig(require('./webhook'));
  this.buildAPIWithConfig(require('./tag'));
  this.buildAPIWithConfig(require('./org'));
  this.buildAPIWithConfig(require('./account'));
  this.buildAPIWithConfig(require('./activate'));

};

HoloClient.prototype.buildConfig = function(options) {
  this.config = _.extend({
    host: "https://dashboard.hologram.io/api",
    version: "1",
    showDebug: false
  }, options);
};

HoloClient.prototype.getBaseUrl = function() {
  return this.config.host + "/" + this.config.version;
};

HoloClient.prototype.responseHandler = function(resolve, reject) {
  return function(error, response) {
    if (!error) {

      if (response.body.success) {
        return resolve(response.body.data);
      }
      else if (!response.body.success) {
        return reject(response.body.error);
      }

    } else {
      return reject(error);
    }
  }
};

HoloClient.prototype.buildAPIWithConfig = function(endpoints) {

  endpoints.forEach(function (endpoint) {

    var level;
    var category = endpoint.category;
    var unitTest = endpoint.unitTest || false;
    var name = endpoint.name;
    var method = endpoint.method;
    var path = endpoint.path;
    var debug = endpoint.debug || false;
    var bodySchema = endpoint.bodySchema;

    if (category) {

      if (!this[category]) {
        this[category] = {}
      }

      level = this[category]

    } else {
      level = this;
    }

    level[name] = function() {

      var _arguments = arguments;
      var params = deepClone(endpoint.params);

      // get all the required params in order they are listed.
      var requiredParams =  params.filter(function (param) { return param.required });
      var optionalParams =  params.filter(function (param) { return !param.required });
      
      // put values from method arguments on the item.
      requiredParams.forEach(function (rParam, idx) {
        if (_.isUndefined(rParam.value)) {
          rParam.value = _arguments[idx];
        }
      });

      var optionValues = _arguments[_arguments.length - 1];
      optionValues = _.pick(optionValues, optionalParams.map((oParam) => oParam.name));

      optionalParams.forEach(function (oParam) {
        if (_.isUndefined(oParam.value)) {
          oParam.value = optionValues[oParam.name];
        }
      });

      var hydratedParams = [].concat(requiredParams).concat(optionalParams);

      // Build query string
      var queryStringObject = {};

      hydratedParams.forEach(function (hParam) {
        if (hParam.location === "querystring" && !_.isUndefined(hParam.value)) {
          queryStringObject[hParam.name] = hParam.value;
        }
      });

      var bodyObject = {};

      hydratedParams.forEach(function (hParam) {
        if (hParam.location === "body" && !_.isUndefined(hParam.value)) {
          bodyObject[hParam.name] = hParam.value;
        }
      });

      if (bodySchema === "activate") {
        bodyObject = this.buildActivateBody(bodyObject);
      }

      var querystring = this.buildQueryString(queryStringObject);
      var pathParams = path.match(/{([^}]*)}/g);
      var compiledPath = path;

      if (pathParams) {

        pathParams.forEach(function(pParam) {

          var trimmedpParam = pParam.slice(1, pParam.length -1);
          var replaceWith = "";
          var matchingParam = _.find(hydratedParams, {name: trimmedpParam});

          if (matchingParam) {
            replaceWith = matchingParam.value;
          } else if (trimmedpParam === "orgId") {
            replaceWith = this.config.orgid;
          }

          compiledPath = compiledPath.replace(pParam, replaceWith);

        }.bind(this));
      }

      if (this.config.testmode && unitTest) {
        return new Promise(function(resolve) {
          resolve({
            url: this.getBaseUrl() + compiledPath + querystring,
            method: method,
            body: bodyObject
          });
        }.bind(this))
      }
      else if (method === "post" || method === "put" || method === "delete") {
        return this[method](this.getBaseUrl() + compiledPath + querystring, bodyObject, debug);
      } else {
        return this[method](this.getBaseUrl() + compiledPath + querystring, debug);
      }

    }.bind(this);

  }.bind(this));
};


HoloClient.prototype.get = function(fqdn, debug) {
  return new Promise(function(resolve, reject) {

    if (this.config.showDebug || debug) console.log("GET: %s", fqdn);

    needle.get(fqdn, this.responseHandler(resolve, reject));

  }.bind(this));
};

HoloClient.prototype.post = function(fqdn, body, debug) {
  
  if (!body) body = {};

  return new Promise(function(resolve, reject) {

    if (this.config.showDebug || debug) console.log("POST: %s with %s", fqdn, JSON.stringify(body));

    needle.post(fqdn, body, this.responseHandler(resolve, reject));

  }.bind(this));
};

HoloClient.prototype.put = function(fqdn, body, debug) {

  if (!body) body = {};

  return new Promise(function(resolve, reject) {

    if (this.config.showDebug || debug) console.log("PUT: %s with %s", fqdn, JSON.stringify(body));

    needle.put(fqdn, body, this.responseHandler(resolve, reject));

  }.bind(this));
};

HoloClient.prototype.delete = function(fqdn, body, debug) {
  
  if (!body) body = {};
  
  return new Promise(function(resolve, reject) {

    if (this.config.showDebug || debug) console.log("DELETE: %s with %s", fqdn, JSON.stringify(body));
    needle.delete(fqdn, body, this.responseHandler(resolve, reject));

  }.bind(this));
};

HoloClient.prototype.buildQueryString = function(additionalQueryParams) {

if (!additionalQueryParams) additionalQueryParams = {};

  var authParams = {
    apikey: this.config.apikey
  };

  if (this.config.orgid) {
    authParams["orgid"] = this.config.orgid;
  }

  return "?" + queryUtils.stringify(_.extend({}, authParams, additionalQueryParams));

};

HoloClient.prototype.buildActivateBody = function(bodyObject) {
  return {
    tasks: [
      {
        endpoint: "/1/links/cellular/bulkclaim",
        params: {
          plan: bodyObject.plan,
          sims: bodyObject.sims,
          tier: bodyObject.zone
        }
      }
    ],
    useacctbalance: bodyObject.useacctbalance ? "1": "0"
  };
};


module.exports = HoloClient;
