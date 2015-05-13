module.exports = {
  development: {
    options: {
      force: true
    },
    src: ['<%= public %>/*.html', '!<%= public %>/index.html']
  }
};