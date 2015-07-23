# Node Object Deep Cloning Benchmarks

## Libraries Tested

- [clone](https://www.npmjs.com/package/clone) `v1.0.2`
- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.2.0`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.2`
- [deep-copy](https://www.npmjs.com/package/deep-copy) `v1.0.0`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.5.0`
- [extend](https://www.npmjs.com/package/extend) `v3.0.0`
- [lodash](https://www.npmjs.com/package/lodash) `v3.10.0`
- [node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`
- [safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.0.5`
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v1.1.0`
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.0.0`

## Latest results

### Node 0.12.x
```
  node-v8-clone    x 39,178 ops/sec ±1.38% (91 runs sampled)
  JSON.stringify   x 34,929 ops/sec ±1.22% (94 runs sampled)
  stringify-clone  x 33,921 ops/sec ±1.14% (93 runs sampled)
  safe-clone-deep  x 23,802 ops/sec ±0.86% (96 runs sampled)
  lodash           x 16,116 ops/sec ±1.22% (90 runs sampled)
  structured-clone x 15,818 ops/sec ±0.95% (94 runs sampled)
  deep-copy        x 15,485 ops/sec ±1.42% (92 runs sampled)
  cloneextend      x 14,589 ops/sec ±1.16% (94 runs sampled)
  extend           x 12,744 ops/sec ±0.99% (94 runs sampled)
  clone            x 12,564 ops/sec ±1.65% (91 runs sampled)
  utils-copy       x 12,517 ops/sec ±1.09% (95 runs sampled)
  clone-deep       x 12,566 ops/sec ±0.96% (93 runs sampled)
  component-clone  x 11,926 ops/sec ±0.91% (94 runs sampled)
  deepcopy         x 10,399 ops/sec ±2.16% (95 runs sampled)
  clone-extend     x  5,289 ops/sec ±2.47% (86 runs sampled)
```

- Fastest is **node-v8-clone**
  - *this uses `C++` extension and does not currently work with io.js*
- Second is `stringify-clone` / `JSON.stringify`
  - *my preferred method, native, and always available, less memory usage, and natively optimized*
  - `stringify-clone` is just a wrapper around `JSON.parse(JSON.stringify())`
- Slowest is **clone-extend**
