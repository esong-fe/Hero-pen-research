const
  gulp = require( 'gulp' ) ,
  minifyJS = require( 'gulp-uglify' ) ,
  minifyCSS = require( 'gulp-minify-css' ) ,
  minifyHTML = require( 'gulp-htmlmin' ) ,
  deleteFile = require( 'del' ) ,

  SRC = 'src' ,
  DIST = 'dist' ,
  paths = {
    js : [
      SRC + '/html/**/*.js' ,
      SRC + '/public/**/*.js' ,
      SRC + '/vendor/bxslider-4/dist/jquery.bxslider.js' ,
      SRC + '/vendor/html5shiv/dist/html5shiv.js' ,
      SRC + '/vendor/jquery/dist/jquery.js' ,
      SRC + '/vendor/respond/dest/respond.src.js'
    ] ,
    css : [
      SRC + '/html/**/*.css' ,
      SRC + '/public/**/*.css' ,
      SRC + '/vendor/bootstrap/dist/css/bootstrap.css' ,
      SRC + '/vendor/bxslider-4/dist/jquery.bxslider.css'
    ] ,
    html : [ SRC + '/**/*.html' , '!' + SRC + '/**/_*{,/**}' ] ,
    copy : [
      SRC + '/**/*.{png,jpg,gif}' ,
      '!' + SRC + '/vendor/bxslider-4/src/images/*'
      /* , SRC + '/!**!/!*.{eot,svg,ttf,woff,woff2}'*/
    ]
  };

gulp.task( 'clean' , function () {
  return deleteFile( DIST );
} );

gulp.task( 'js' , [ 'clean' ] , function () {
  return gulp.src( paths.js , { base : SRC } )
    .pipe( minifyJS() )
    .pipe( gulp.dest( DIST ) );
} );

gulp.task( 'css' , [ 'clean' ] , function () {
  return gulp.src( paths.css , { base : SRC } )
    .pipe( minifyCSS() )
    .pipe( gulp.dest( DIST ) );
} );

gulp.task( 'html' , [ 'clean' ] , function () {
  return gulp.src( paths.html , { base : SRC } )
    .pipe( minifyHTML( {
      removeComments : true ,
      collapseWhitespace : true
    } ) )
    .pipe( gulp.dest( DIST ) );
} );

gulp.task( 'copy' , [ 'clean' ] , function () {
  return gulp.src( paths.copy , { base : SRC } )
    .pipe( gulp.dest( DIST ) );
} );

gulp.task( 'default' , [ 'js' , 'css' , 'html' , 'copy' ] );
