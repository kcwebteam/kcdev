module.exports = {
  development: {
    options: {
      //https://github.com/airbnb/javascript/blob/master/linters/jshintrc
      browser: true,
      jquery: true,
      node: true,
      esnext: true,
      camelcase: true,
      eqeqeq: true,
      indent: 2,
      latedef: true,
      //maxlen: 80,
      newcap: true,
      quotmark: 'single',
      strict: true,
      undef: true,
      unused: true,
      eqnull: true
    },
    files : {
      src: ['<%= src %>/js/lib/choose-bg.js']
    }
  },
  spec: {
    options: {
      browser: true,
      jquery: true,
      node: true,
      esnext: true,
      camelcase: true,
      eqeqeq: true,
      indent: 2,
      latedef: true,
      //maxlen: 80,
      newcap: true,
      quotmark: 'single',
      strict: true,
      undef: true,
      unused: true,
      eqnull: true
    },
    files : {
      src: ['<%= src %>/js/lib/onload/onload-lib/onload.js']
    }
  }
};