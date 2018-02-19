/* Написать простую Gulp задачу, с именем 'TS', 
которая берет все файлы с раширением .ts из 
папки A и выбрасывает в папку B. */
gulp.task('TS', function(){
    return gulp.src('a/*.ts').pipe(gulp.dest('b'));
});

/* Написать простую Gulp задачу слежения, 
с именем 'watch:ts', которая следит за всеми 
файлами в папке A, и при изменении любого файла 
с раширением .ts, выполняет таск с именем 'TS'. */
const ts = require('TS');

gulp.task('wathc:ts', function(){
    gulp.watch('a/*.ts')
    .pipe(ts());
});

/* Написать npm скрипт с именем 'build:ts', 
который выполняет gulp задачу с имнем 'watch:ts' */
const watch = require('watch:ts');

gulp.task('build:ts', function(){
    watch();
});