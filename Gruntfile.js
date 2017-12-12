module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        usebanner: {
            build: {
                options: {
                    position: 'top',
                    banner: '/*!\n' +
                            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                            ' * \n' +
                            ' * <%= pkg.description %> \n' +
                            ' * \n' +
                            ' * Release v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> \n' +
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
            build: {
                options: {
                    style: 'expanded',
                    noCache: true,
                    sourcemap: 'none'
                },
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
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['sass', 'cssmin', 'usebanner']);
};