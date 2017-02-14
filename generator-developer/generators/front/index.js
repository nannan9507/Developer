'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.props = {};
  }

  prompting() {
    return this.prompt([{
      type: 'confirm',
      name: 'hybrid',
      message: '是否为移动端项目?'
    }]).then((answer) => {
      this.props['hybrid'] = answer.hybrid;
    })
  }

  configuring() {
    if (this.props.hybrid) {
      this.fs.copy(
        this.templatePath('phone'),
        this.destinationPath('./front')
      )
    } else {
      this.fs.copy(
        this.templatePath('web'),
        this.destinationPath('./front')
      )  
    }
  }

  install() {
  	this.npmInstall(['jquery'])
  }
}
