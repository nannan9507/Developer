'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  configuring() {
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    )

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    )

    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    )

    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    )
  }
}
