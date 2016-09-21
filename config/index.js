var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname +
		':' + configValues.pwd + '@ds033046.mlab.com:33046/to-do-list';
	}
}