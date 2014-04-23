module.exports = function(grunt) {
    grunt.initConfig({
        scripts: 'webapp/resources/scripts',
        styles: 'webapp/resources/styles',
        watch: {
            coffee: {
                files: ['<%= scripts %>/coffee/**/*.coffee'],
                tasks: ['clean:js', 'coffee']
            },
            sass: {
                files: ['<%= styles %>/sass/**/*.scss'],
                tasks: ['clean:css', 'sass']
            }
        },
        clean: {
            css: {
                src: '<%= styles %>/css'
            },
            js: {
                src: '<%= scripts %>/js/app'
            }
        },
        coffee: {
            options: {
                bare: true,
                sourceMap: true,
                sourceMapDir: '<%= scripts%>/js/source-map/'
            },
            files: {
                expand: true,
                cwd: '<%= scripts %>/coffee',
                src: ['**/*.coffee'],
                dest: '<%= scripts %>/js/app',
                ext: '.js'
            }
        },
        sass: {
            files: {
                expand: true,
                cwd: '<%= styles %>/sass',
                src: ['**/*.scss'],
                dest: '<%= styles %>/css',
                ext: '.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['clean', 'coffee', 'sass']);
};