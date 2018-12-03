const sass = require('node-sass');

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        usebanner: {
            build: {
                options: {
                    position: 'top',
                    banner: '/*!\n' +
                            ' * <%= pkg.niceName %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                            ' * \n' +
                            ' * <%= pkg.description %> \n' +
                            ' * \n' +
                            ' * Release v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n' +
                            ' * Licensed under <%= pkg.license %> \n' +
                            ' */',
                    linebreak: true
                },
                files: {
                    src: [ 'dist/select2-bootstrap4.css', 'dist/select2-bootstrap4.min.css' ]
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'expanded',
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/select2-bootstrap4.css': 'src/build.scss'
                }
            }
        },
        cssmin: {
            build: {
                options: {
                    level: {
                        1: {
                            specialComments: 0
                        }
                    }
                },
                files: {
                    'dist/select2-bootstrap4.min.css': 'dist/select2-bootstrap4.css'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['sass', 'cssmin', 'usebanner']);
};
