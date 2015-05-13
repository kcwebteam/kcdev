module.exports = {
  install: {
     //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
    options: {
      targetDir: './src/bower_components',
      cleanBowerDir: true,
      layout: 'byComponent'
    }
  }
};