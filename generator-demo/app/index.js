var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	initializing() {
		this.props = {};
	};

  webpack() {
  	this.fs.copy(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js')
  	)
  }

  pack() {
  	this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('package.json')
  	)
  }

  babelRc() {
  	this.fs.copy(
			this.templatePath('babelrc'),
			this.destinationPath('.babelrc')
  	)
  }

  editorConfig() {
  	this.fs.copy(
  		this.templatePath('editorconfig'),
  		this.destinationPath('.editorconfig')
  	)
  }

  base() {
  	this.fs.copyTpl(
  		this.templatePath('index.html'),
  		this.destinationPath('index.html')
  	);

  	this.fs.copy(
  		this.templatePath('src/**'),
  		this.destinationPath('src')
  	);

  	this.fs.copy(
  		this.templatePath('dist/**'),
  		this.destinationPath('dist/')
  	)
  };

	installingLodash() {
		// webpack
    this.npmInstall([
    	'webpack',
      'webpack-dev-server',
    	'css-loader',
    	'style-loader',
    	'file-loader',
    	'url-loader',
    	'less',
    	'less-loader',
    	'extract-text-webpack-plugin',
    	'html-webpack-plugin',
    	'transfer-webpack-plugin',
      'raw-loader'
    ], { 'saveDev': true });

    // babel
    this.npmInstall([
      'babel-core',
      'babel-loader',
      'babel-preset-es2015',
      'babel-preset-stage-0',
      'babel-runtime',
      'babel-plugin-transform-runtime'
    ], { 'saveDev': true })
    
    // base
    this.npmInstall(['jquery'], { 'save': true });
  };

  end() {
  	console.log('good bye')
  };
};