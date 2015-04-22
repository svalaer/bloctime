module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'sass', 'autoprefixer', 'copy', 'hapi', 'concat', 'watch' ] );

    grunt.registerTask( 'build', [ 'clean', 'sass', 'autoprefixer', 'copy', 'concat'] );

    grunt.registerTask( 'run', [ 'hapi', 'watch', 'concat']);

    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    './dist/js/app.js': ['./app/scripts/app.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './dist/css/app.css': './app/sass/app.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    './dist/css/app.css': './dist/css/app.css'
                }
            }
        },

        watch: {
            hapi: {
                files: [
                    './app/scripts/**/*.js',
                    './app/sass/**/*.scss',
                    './app/pages/**/*.html',
                    './app/templates/**/*.html',
                    'Gruntfile.js'
                ],
                tasks: [
                    'clean',
                    'browserify',
                    'sass',
                    'autoprefixer',
                    'copy',
                    'concat'
                ],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './**/*.png', './**/*.jpg' ],
                    dest: './dist/img',
                    cwd: './app/img/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                },
                    {
                    expand: true,
                    src: [ './**/*.*' ],
                    dest: './dist/fonts',
                    cwd: './app/fonts'
                }, {
                    expand: true,
                    src: [ './**/*.*' ],
                    dest: './dist/assets',
                    cwd: './assets/bower_components'
                },{
                    expand: true,
                    src: [ './**/*.coffee' ],
                    dest: './dist/src',
                    cwd: './app/src'
                }

                ]
            }
        },

        concat: {
            js: {
                src: ['app/scripts/app.js', 'app/scripts/firebase.js', 'app/scripts/greyscale.js'
                ],
                dest: 'dist/js/app.js'
            }
        },

        hapi: {
            custom_options: {
                options: {
                    server: require('path').resolve('./server'),
                    bases: {
                        '/dist': require('path').resolve('./dist/')
                    }
                }
            }
        },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
