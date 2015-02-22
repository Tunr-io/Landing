/// <binding AfterBuild='default' />
module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                src: 'Content/Less/Site.less',
                dest: 'Content/Style.css'
            }
        }
    });

    // Default task
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};