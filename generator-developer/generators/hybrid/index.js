'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  configuring() {
  	this.fs.copy(
  		this.templatePath(),
      this.destinationPath()
  	)
  }

  install() {
  	this.npmInstall(['jquery'])
  }
}
