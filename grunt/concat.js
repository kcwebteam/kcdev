module.exports = {
  development: {
    options: {
      stripBanners: {
        options: {},
      },
      banner: '/*\n'+
              ' * Author: King County Web Team\n' +
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= src %>/js/scripts/kc-formValidation.js':
      ['<%= src %>/js/scripts/form-validator/dist/js/formValidation.js',
       '<%= src %>/js/scripts/mandatoryIcon/mandatoryIcon.js',
       '<%= src %>/js/scripts/form-validator/dist/js/framework/kc-bootstrap.js'
      ],
      '<%= public %>/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '!<%= src %>/js/lib/dept-footer-map.js',
      //'<%= src %>/js/vendor/site-improve.js',
      //'<%= src %>/js/vendor/fitvids.min.js',
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
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= tfs %>/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '!<%= src %>/js/lib/dept-footer-map.js',
      //'<%= src %>/js/vendor/site-improve.js',
     // '<%= src %>/js/vendor/fitvids.min.js',
      '<%= src %>/js/vendor/scrollToFixed.min.js'],
    },
  },
  app: {
    options: {
      data: {
        debug: false,
      },
      banner: '/*\n'+
              ' * Author: King County Web Team\n' +
              ' * Description: King County JS file\n'+
              ' *\/\n',
    },
    files: {
      '<%= app %>/public/js/main.js':
      ['<%= src %>/js/lib/*.js',
      '!<%= src %>/js/lib/add-this-buttons.js',
      '!<%= src %>/js/lib/choose-bg.js',
      '!<%= src %>/js/lib/footer-collapse-resize.js',
      '!<%= src %>/js/lib/footer-collapse.js',
      '!<%= src %>/js/lib/ga-links.js',
      '!<%= src %>/js/lib/main-nav-fade.js',
      '!<%= src %>/js/lib/nav-dropdown-delay.js',
      '!<%= src %>/js/lib/setup.js',
      '!<%= src %>/js/lib/sidebar-nav-indent.js',
      '!<%= src %>/js/lib/dept-footer-map.js',
      '<%= app %>/js/setup.js',
      '<%= app %>/js/choose-bg.js'
      //'<%= src %>/js/vendor/fitvids.min.js'
      ],
    },
  }
};