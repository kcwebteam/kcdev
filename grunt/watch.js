module.exports = {
  styles: {
    files: ['<%= src %>/less/*'],
    tasks: ['less'],
    options: {
      cleancss: true
    }
  },
  scripts:{
    files: ['<%= src %>/js/*'],
    tasks:['scripts']
  },
  jade: {
    files: ['<%= src %>/jade/*'],
    tasks: ['jade'],
    options: {
      pretty: true,
      data: {
        debug: false,
      }
    }
  },
  spec: {
    files: ['<%= src %>/jade/<%= targetFile %>.jade'],
    tasks: ['jade:spec']
  }
};
    
      
    