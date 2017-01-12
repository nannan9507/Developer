var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	initializing() {
		this.props = {};
	};
	
  // prompting() {
  //   return this.prompt([{
  //     type    : 'confirm',
  //     name    : 'server',
  //     message : '项目是否需要服务器?'
  //   }]).then((answers) => {
  //     this.props['server'] = answers.server;
  //   });
  // };

  // prompting2() {
  // 	if (this.props.server) {
  // 		return this.prompt([{
	 //    	type    : 'confirm',
	 //    	name    : 'delay',
	 //    	message : '是否允许服务器安装包?'
	 //    }]).then((answers) => {
	 //      this.props['delay'] = answers.delay;
	 //    });
  // 	}
  // };

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
    	'css-loader',
    	'style-loader',
    	'file-loader',
    	'url-loader',
    	'less',
    	'less-loader',
    	'extract-text-webpack-plugin',
    	'html-webpack-plugin',
    	'transfer-webpack-plugin'
    ], { 'saveDev': true });

    // babel
    this.npmInstall(['babel-preset-es2015', 'babel-preset-stage-0', 'babel-runtime', 'babel-plugin-transform-runtime'], { 'saveDev': true })
    
    // base
    this.npmInstall(['jquery'], { 'save': true });

    // 如果需要服务器
    // if (this.props.server) {
    // 	this.npmInstall(['webpack-dev-middleware', 'webpack-hot-middleware'], { 'saveDev': true });
    // } else {
    	this.npmInstall(['webpack-dev-server'], { 'saveDev': true });
    // }

  };

  end() {
  	console.log('good bye')
  };
};