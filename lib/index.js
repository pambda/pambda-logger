const { log } = require('lambda-console');

exports.logger = (options = {}) => {
  const {
    event = true,
    result = true,
  } = options;

  if (!event && !result) {
    return next => next;
  }

  if (event && !result) {
    return next => (event, context, callback) => {
      log(event);

      next(event, context, callback);
    };
  }

  if (!event && result) {
    return next => (event, context, callback) => {
      next(event, context, (err, result) => {
        log({
          err,
          result,
        });

        callback(err, result);
      });
    };
  }

  return next => (event, context, callback) => {
    log(event);

    next(event, context, (err, result) => {
      log({
        err,
        result,
      });

      callback(err, result);
    });
  };
};
