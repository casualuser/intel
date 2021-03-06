# intel ChangeLog

## Current dev

- added `formatFn` for Formatters and `regex`, `flags`, and `function` for Filters to ease `intel.config()`
- changed `intel.config` to remove default ROOT console handler

## v0.4.0 0 2013-12-04

- added intel.console({ debug: 'foo' }) option
- performance gains

## v0.3.1 - 2013-11-04

- fixed Rotating handler writing lock (thanks @chopachom)

## v0.3.0 - 2013-10-22

- added intel.handlers.Rotating
- added ignore options to intel.console()
- added chalk.enabled when colorize is used
- added padding and truncation to printf
- added Logger#handleExceptions to catch uncaught exceptions
- added stack traces when an exception is logged
- changed datetime to strftime, adds `%L` to output milliseconds
- changed Promises from Q to bluebird, significantly faster
- fixed Console handler from using accepting format options
- optimizations for common cases, big boost

## v0.2.0 - 2013-10-04

- added Filters for Handlers and Loggers
- added Handler timeout option
- added pid to LogRecord
- added configuration using JSON
- changed Promises to LazyPromises
- changed printf to faster, smaller printf
- changed internal forEach to faster while loops
- removed node v0.6 support (it didn't work anyways)

## v0.1.0 - 2013-09-30

- Initial release.
