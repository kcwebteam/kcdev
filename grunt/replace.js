module.exports = {
  development: {
    src: '<%= public %>/js/main.js',
    overwrite: true,
    replacements: [{
      from: '!{httpPrefix}',
      to: 'http:'
    }]
  },
  tfs: {
    src: '<%= tfs %>/js/main.js',
    overwrite: true,
    replacements: [{
      from: '!{httpPrefix}',
      to: ''
    }]
  }
};