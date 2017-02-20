var HoloClient = require('./HoloClient.js');
var clientInstance;

// Create a Singleton of the API.
function initialize(apiKey, options) {

	options.apikey = apiKey;

	if (!clientInstance) {
		clientInstance = new HoloClient(options);
	} else {
		clientInstance.buildConfig(options)
	}

	return clientInstance;
}

module.exports = initialize;
