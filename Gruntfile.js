module.exports = function(grunt) {
  'use strict';

  // Set option in command line --targetFile="file"
  var targetFile = grunt.option('targetFile');

  var globalConfig = {
    src: 'src',
    public: 'public',
    tfs: 'tfs',
    styleguide :'public',
    targetFile : targetFile
  };

  var path = require('path');

  // 1. All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  require('load-grunt-config')(grunt,{
    configPath: path.join(process.cwd(), 'grunt'),
    init: true,
    data: globalConfig
  });

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['development']);
  grunt.registerTask(
    'html',
    'Build html files from jade',
    ['jade:development']
  );
  grunt.registerTask(
    'scripts',
    'Concats and minifies files',
    ['concat:development','replace:development', 'copy:dev-js', 'uglify:development']
  );
  grunt.registerTask(
    'styles',
    'Compiles the stylesheets',
    [ 'less:development', 'autoprefixer:development', 'copy:dev-css']
  );
  grunt.registerTask(
    'bower-install',
    'Complies bower files and copies them to src directory',
    ['bower:install','copy:bower' ]
  );
  grunt.registerTask(
    'development',
    'Compiles all of the assets into to the build directory.',
    ['clean','bower-install','styles', 'scripts', 'html']
  );
};