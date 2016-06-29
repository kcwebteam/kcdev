module.exports = {
  development: {
    src: '<%= public %>/js/main.js',
    overwrite: true,
    replacements: [{
      from: '!{httpPrefix}',
      to: ''
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