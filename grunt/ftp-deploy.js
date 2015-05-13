module.exports = {
  build: {
    auth: {
      host: 'webupload.kingcounty.gov',
      port: 21,
      authKey: 'key1'
    },
    src: ['<%= public %>/' ],
    dest: 'kcproto.kingcounty.gov/bs3/',
    exclusions: ['<%= public %>/html','']
  }
};
