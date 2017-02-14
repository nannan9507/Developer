'use strict';
var Generator = require('yeoman-generator');

let options = {};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    options['server'] = opts.hasServer;
  }

  configuring() {
    this.fs.copy(
      this.templatePath('empty.json'),
      this.destinationPath('./front/package.json')
    )

    if (options.server) {
      this.fs.copy(
        this.templatePath('hasServer.json'),
        this.destinationPath('package.json')
      )
    } else {
      this.fs.copy(
        this.templatePath('noServer.json'),
        this.destinationPath('package.json')
      )
    }
  }
}
