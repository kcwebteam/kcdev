module.exports = {
  development: {
    options: {
      stripBanners: {
        options: {},
      },
      banner: '/*\n'+
              ' * Author: King County Web Team\n' +
              ' * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n'+
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= src %>/js/vendor/kc-formValidation.js':
      ['<%= src %>/js/vendor/form-validator/dist/js/formValidation.js',
      '<%= src %>/js/vendor/form-validator/dist/js/framework/bootstrap.js'],
      '<%= public %>/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '!<%= src %>/js/lib/dept-footer-map.js',
      '<%= src %>/js/vendor/site-improve.js',
      '<%= src %>/js/vendor/fitvids.min.js',
      '<%= src %>/js/vendor/scrollToFixed.min.js'],
    },
  },
  tfs: {
    options: {
      data: {
        debug: false,
      },
      banner: '/*\n'+
              ' * Author: King County Web Team\n' +
              ' * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n'+
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= tfs %>/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '<%= src %>/js/vendor/site-improve.js',
      '<%= src %>/js/vendor/fitvids.min.js',
      '<%= src %>/js/vendor/scrollToFixed.min.js'],
    },
  }
};