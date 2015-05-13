module.exports = {
  'dev-js':{
    files: [{
      src: '<%= src %>/js/vendor/kc-analytics.js',
      dest: '<%= public %>/js/vendor/kc-analytics.js'
    },
    {
      src: '<%= src %>/js/vendor/modernizr-latest.js',
      dest: '<%= public %>/js/vendor/modernizr-latest.js'
    },
    {
      src: '<%= src %>/js/vendor/kc-formValidation.js',
      dest: '<%= public %>/js/vendor/kc-formValidation.min.js'
    },
    {
      src: '<%= src %>/js/lib/dept-footer-map.js',
      dest: '<%= public %>/js/lib/dept-footer-map.js'
    }]
  },
  'tfs-js':{
    files: [{
      src: '<%= src %>/js/vendor/kc-analytics.js',
      dest: '<%= tfs %>/js/vendor/kc-analytics.js'
    },
    {
      src: '<%= src %>/js/vendor/modernizr-latest.js',
      dest: '<%= tfs %>/js/vendor/modernizr-latest.js'
    }]
  },
  'dev': {
    src: '<%= src %>/js/main.js',
    dest: '<%= public %>/js/main.js'
  },
  'bower': {
    files:[
      {
        src: '<%= src %>/bower_componentsjs/main.js',
        dest: '<%= public %>/js/main.js'
      }
    ]
  }
};