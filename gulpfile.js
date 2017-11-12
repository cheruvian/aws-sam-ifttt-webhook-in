const gulp = require('gulp');
const eslint = require('gulp-eslint');
const zip = require('gulp-zip');
const fs = require('fs');
const path = require('path');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));

// Run JS Hint, fail if warnings are found
gulp.task('lint', () => {
    return gulp.src([
        path.join(packageJson.config.lambda_dir, '/**.js'),
        path.join('!', packageJson.config.lambda_dir, '/node_modules/**')
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Zip up the source
gulp.task('zip', function () {
    const paths = [
        path.join(packageJson.config.lambda_dir, '/**'),
    ];
    gulp.src(paths, {base: '.'})
        .pipe(zip(packageJson.config.lambda_dir + '.zip'))
        .pipe(gulp.dest(packageJson.config.build_dir));
});

gulp.task('sample', function (cb) {
    const sample = process.env.SAMPLE || 'payload.json';
    const event = require('./sample-events/' + sample);
    require(packageJson.config.lambda_dir).handler(event, null, cb);
});

// default runs lint, then packages the code into the build directory
gulp.task('default', ['lint', 'zip']);
