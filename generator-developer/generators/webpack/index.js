'use strict';
var Generator = require('yeoman-generator');

let options = {};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    options['server'] = opts.hasServer;
  }

  configuring() {
    if (options.server) {
      this.fs.copy(
        this.templatePath('hasServer'),
        this.destinationPath('webpack.config.js')
      )
    } else {
      this.fs.copy(
        this.templatePath('noServer'),
        this.destinationPath('webpack.config.js')
      )
    }
  }

  install() {
    if (options.server) {

    } else {
      this.npmInstall(['webpack', 'webpack-dev-middleware', 'webpack-hot-middleware', 'extract-text-webpack-plugin', 'html-webpack-plugin', 'transfer-webpack-plugin', 'webpack-dev-server', 'reload'], { 'save-dev': true })
    }
  }
}
