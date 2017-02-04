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
    this.npmInstall(['webpack', 'extract-text-webpack-plugin', 'html-webpack-plugin', 'transfer-webpack-plugin'])
    if (options.server) {
      this.npmInstall(['webpack', 'webpack-dev-middleware', 'webpack-hot-middleware', 'reload'], { 'save-dev': true })
    } else {
      this.npmInstall(['webpack', 'webpack-dev-server'], { 'save-dev': true })
    }
  }
}
