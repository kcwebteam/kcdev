module.exports = {
  dev: {
    options: {
      bare: true
    },
    files: {
      '<%= src %>/js/test.js': '<%= src %>/coffee/test.coffee', // 1:1 compile
    }
  }
};