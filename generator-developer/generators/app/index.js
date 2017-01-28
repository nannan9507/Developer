'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator{
  initializing() {
    console.log(222)
    this.composeWith('developer:configure')
  }
};
