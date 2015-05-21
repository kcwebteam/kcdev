module.exports = {
  development: {
    files: [
      {
        src: '<%= src %>/js/vendor/bootstrap.min.js',
        dest: '<%= public %>/js/vendor/bootstrap.min.js'
      },
      {
        src: '<%= src %>/js/vendor/jquery.min.js',
        dest: '<%= public %>/js/vendor/jquery.min.js'
      },
      {
        src: '<%= src %>/js/vendor/kc-analytics.js',
        dest: '<%= public %>/js/vendor/kc-analytics.js'
      },
      {
        src: '<%= src %>/js/vendor/modernizr-latest.js',
        dest: '<%= public %>/js/vendor/modernizr-latest.js'
      }
    ]
  },
  tfs: {
    files: {
      '<%= tfs %>/js/main.js': ['<%= src %>/js/main.js']
    }
  }
};
