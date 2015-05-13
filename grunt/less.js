module.exports = {
  development: {
    options: {
      paths: ['<%= src %>/less'],
      cleancss: false,
      compress: false,
      modifyVars: {
        'fa-font-path' : '"http://netdna.bootstrapcdn.com/font-awesome/4.3.0/fonts"'
      }
    },
    files: {
      '<%= public %>/css/kc-theme-default.css': '<%= src %>/less/kc-theme-default.less',
      '<%= public %>/css/kc-theme-caring.css': '<%= src %>/less/kc-theme-caring.less',
      '<%= public %>/css/kc-theme-corporate.css': '<%= src %>/less/kc-theme-corporate.less',
      '<%= public %>/css/kc-theme-environment.css': '<%= src %>/less/kc-theme-environment.less',
      '<%= public %>/css/kc-print.css': '<%= src %>/less/print/kc-print.less',
      '<%= public %>/css/ie-only.css': '<%= src %>/less/IE-only/ie-only.less'
    }
  },
  tfs: {
    options: {
      paths: ['<%= src %>/src/less'],
      cleancss: false,
      compress: false,
    },
    files: {
      '<%= tfs%>/css/kc-theme-default.css': '<%= src %>/less/kc-theme-default.less',
      '<%= tfs %>/css/kc-theme-caring.css': '<%= src %>/less/kc-theme-caring.less',
      '<%= tfs %>/css/kc-theme-corporate.css': '<%= src %>/less/kc-theme-corporate.less',
      '<%= tfs %>/css/kc-theme-environment.css': '<%= src %>/less/kc-theme-environment.less',
      '<%= tfs %>/css/kc-print.css': '<%= src %>/less/print/kc-print.less',
      '<%= tfs %>/css/ie-only.css': '<%= src %>/less/IE-only/ie-only.less'
    }
  }
};