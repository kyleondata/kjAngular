module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 5000,
          base: 'ui',
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
