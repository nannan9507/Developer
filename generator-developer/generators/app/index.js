'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  initializing() {
    console.log(222)
    this.composeWith('developer:configure')
  }
});
