'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith('developer:configure'),
    this.composeWith('developer:server'),
    this.composeWith('developer:front')
  }
};
