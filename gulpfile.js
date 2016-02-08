/**
 * 
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var bower = function(path) {
    return 'bower_components/' + path;
};

var SOURCES = [
    bower("jquery/dist/jquery.min.js"),
    bower("beefjs/dist/beef.min.js"),
    bower("react/react.min.js"),
    bower("react/react-dom.min.js"),
    bower("momentjs/min/moment.min.js"),
    'js/src/app/*',
    'js/src/view/component/*',
    'js/src/view/app.js'
];

gulp.task('default', function() {
    gulp.src(SOURCES)
            .pipe(babel({
                presets: ["react"]
            }))
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./js/dist/'))
    ;
});