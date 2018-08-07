const test = require('tape');
const { logger } = require('..');

test('test', t => {
  t.plan(3);

  const pambda = logger({
    event: false,
    result: false,
  });

  const next = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
    });
  };

  const lambda = pambda(next);

  t.equal(lambda, next);

  const event = {
    path: '/',
  };

  lambda(event, {}, (err, result) => {
    t.error(err);
    t.equal(result.statusCode, 200);
  });
});

test('test', t => {
  t.plan(3);

  const pambda = logger({
    event: true,
    result: false,
  });

  const next = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
    });
  };

  const lambda = pambda(next);

  t.notEqual(lambda, next);

  const event = {
    path: '/',
  };

  lambda(event, {}, (err, result) => {
    t.error(err);
    t.equal(result.statusCode, 200);
  });
});

test('test', t => {
  t.plan(3);

  const pambda = logger({
    event: false,
    result: true,
  });

  const next = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
    });
  };

  const lambda = pambda(next);

  t.notEqual(lambda, next);

  const event = {
    path: '/',
  };

  lambda(event, {}, (err, result) => {
    t.error(err);
    t.equal(result.statusCode, 200);
  });
});

test('test', t => {
  t.plan(3);

  const pambda = logger({
  });

  const next = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
    });
  };

  const lambda = pambda(next);

  t.notEqual(lambda, next);

  const event = {
    path: '/',
  };

  lambda(event, {}, (err, result) => {
    t.error(err);
    t.equal(result.statusCode, 200);
  });
});
