'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.props = {};
  }

  prompting() {
    return this.prompt([{
      type: 'confirm',
      name: 'server',
      message: '是否需要服务器?'
    }]).then((answer) => {
      this.props['server'] = answer.server;
    })
  }

  writing() {
    this.composeWith('developer:webpack', { hasServer: this.props.server });

    if (this.props.server) {
      this.fs.copy(
        this.templatePath(),
        this.destinationPath()
      )
    }
  }
}
