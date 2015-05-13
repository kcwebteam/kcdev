module.exports = {
  options: {
    banner: '/*\n'+
            ' * Author: King County Web Team\n' +
            ' * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n'+
            ' * Description: King County JS file\n'+
            ' *\/\n'
  },
  development: {
    files: {
      '<%= public %>/js/main.js': ['<%= public %>/js/main.js'],
      '<%= public %>/js/vendor/kc-formValidation.min.js': ['<%= public %>/js/vendor/kc-formValidation.min.js']
    }
  },
  tfs: {
    files: {
      '<%= tfs %>/js/main.js': ['<%= src %>/js/main.js']
    }
  }
};