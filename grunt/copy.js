module.exports = {
  'dev-js':{
    files: [{
      src: '<%= src %>/js/scripts/kc-formValidation.js',
      dest: '<%= public %>/js/scripts/kc-formValidation.js'
    },
    {
      src: '<%= src %>/js/lib/dept-footer-map.js',
      dest: '<%= public %>/js/scripts/dept-footer-map.js'
    }]
  },
  'dev-css':{
    files: [{
      src: '<%= src %>/js/scripts/form-validator/dist/css/formValidation.min.css',
      dest: '<%= public %>/css/styles/formValidation.min.css'
    }]
  },
  'git-kcdev':{
    files: [{
      expand: true,
      cwd: 'grunt/',
      src: ['**'],
      dest: '<%= git %>/kcdev/grunt/'
    },
    {
      expand: true,
      cwd: '<%= src %>/less/',
      src: ['**'],
      dest: '<%= git %>/kcdev/src/less/'
    },
    {
      expand: true,
      cwd: '<%= src %>/js/',
      src: ['**'],
      dest: '<%= git %>/kcdev/src/js/'
    },
    {
      expand: true,
      cwd: '<%= src %>/jade/includes/',
      src: ['**'],
      dest: '<%= git %>/kcdev/src/jade/includes/'
    },
    {
      expand: true,
      cwd: '<%= src %>/jade/',
      src: ['theme-*.jade'],
      dest: '<%= git %>/kcdev/src/jade/'
    },
    {
      src: '<%= src %>/jade/index.jade',
      dest: '<%= git %>/kcdev/src/jade/index.jade'
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
    },
    {
      src: '<%= src %>/js/scripts/kc-formValidation.js',
      dest: '<%= tfs %>/js/scripts/kc-formValidation.js'
    },
    {
      src: '<%= src %>/js/lib/dept-footer-map.js',
      dest: '<%= tfs %>/js/scripts/dept-footer-map.js'
    }]
  },
  'tfs-css':{
    files: [{
      src: '<%= src %>/js/scripts/form-validator/dist/css/formValidation.css',
      dest: '<%= tfs %>/css/styles/formValidation.css'
    }]
  },
  'bower': {
    files: [
      { //Bootstrap LESS
        expand: true,
        cwd: '<%= src %>/bower_components/bootstrap/less/',
        src: ['**'],
        dest: '<%= src %>/less/bootstrap/'
      },
      {//Bootstrap JS
        src: '<%= src %>/bower_components/bootstrap/js/bootstrap.min.js',
        dest: '<%= src %>/js/vendor/bootstrap.min.js'
      },
      {//Fitvids
        src: '<%= src %>/bower_components/fitvids/jquery.fitvids.js',
        dest: '<%= src %>/js/vendor/fitvids.min.js'
      },
      {//Fontawesome
        expand: true,
        cwd: '<%= src %>/bower_components/fontawesome/less/',
        src: ['**'],
        dest: '<%= src %>/less/font-awesome/'
      },
      {//jQuery
        src: '<%= src %>/bower_components/jquery/jquery.js',
        dest: '<%= src %>/js/vendor/jquery.min.js'
      },
      {//ScrollToFixed
        src: '<%= src %>/bower_components/ScrollToFixed/jquery-scrolltofixed.js',
        dest: '<%= src %>/js/vendor/scrollToFixed.min.js'
      },
      {//yamm3
        src: '<%= src %>/bower_components/yamm3/yamm.less',
        dest: '<%= src %>/less/yamm/yamm.less'
      }
    ]
  }
};