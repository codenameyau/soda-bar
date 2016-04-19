soda-bar
========

Collection of gulpfiles

Use the following technique to reduce `gulp watch` CPU consumption from 10% to 1%.

```javascript
var WATCH_OPT = {debounceDelay: 400, interval: 400};

gulp.task('watch', function() {
  gulp.watch(src_paths.sass, WATCH_OPT, ['sass']);
  gulp.watch(src_paths.coffee, WATCH_OPT, ['coffee']);
});
```
