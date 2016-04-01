module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-copy');

    grunt.initConfig({
        copy: {
            options: {},
            files: {
                'tmp/files': ['app/src/Jar.StuckPointPlacement', 'app/src/Jar.Common']
            }
        }
    });

    grunt.registerTask('default', ['copy']);
};