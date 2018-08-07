# pambda-logger

[Pambda](https://github.com/pambda/pambda) to log events.

## Installation

```
npm i pambda-logger
```

## Usage

``` javascript
const { compose, createLambda } = require('pambda');
const { logger } = require('pambda-logger');

exports.handler = createLambda(
  compose(
    logger({}),

    // Other pambdas
  )
);
```

## logger(options = {})

- `options.event`
  - A boolean value whether logging events.
  - If event logs is unneeded, this option should be specified `false` explicitly.
  - Default: `true`
- `options.result`
  - A boolean value whether logging results.
  - If result logs is unneeded, this option should be specified `false` explicitly.
  - Default: `true`

## License

MIT
