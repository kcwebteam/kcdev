module.exports = {
  options: {
    browsers: ['last 2 versions', 'ie >= 8']
  },
  development: {
    src: '<%= public %>/css/*.css', // source files will be overwritten            
  },
  tfs: {
    src: '<%= tfs %>/css/*.css', // source files will be overwritten            
  }
};