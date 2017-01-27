var Generator = require('yeoman-generator');

module.exports = class extends Generator {
	initializing() {
		console.log(12)
    this.composeWith(require.resolve('../../generator-configure-develop'));
  }
};