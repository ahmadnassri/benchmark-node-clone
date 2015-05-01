# Node Object Deep Cloning Benchmarks

## Libraries Tested

- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.1.1`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v1.0.0`
- [clone](https://www.npmjs.com/package/clone) `v1.0.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.2`
- [deep-copy](https://www.npmjs.com/package/deep-copy) `v1.0.0`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.5.0`
- [extend](https://www.npmjs.com/package/extend) `v2.0.1`
- [lodash](https://www.npmjs.com/package/lodash) `v3.6.0`
- [node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`
- [safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.0.5`
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.0.0`

## Latest results

### Node 0.12.x
```
  JSON.stringify   x 41,290 ops/sec ±0.53% (93 runs sampled)
  stringify-clone  x 41,837 ops/sec ±0.25% (96 runs sampled)
  clone            x 18,213 ops/sec ±0.67% (100 runs sampled)
  clone-deep       x 26,876 ops/sec ±0.63% (96 runs sampled)
  clone-extend     x  7,995 ops/sec ±0.84% (100 runs sampled)
  cloneextend      x 19,788 ops/sec ±1.03% (91 runs sampled)
  component-clone  x 16,366 ops/sec ±1.58% (95 runs sampled)
  deepcopy         x 14,523 ops/sec ±0.48% (101 runs sampled)
  lodash           x 23,132 ops/sec ±0.92% (94 runs sampled)
  safe-clone-deep  x 32,688 ops/sec ±0.88% (97 runs sampled)
  structured-clone x 21,225 ops/sec ±4.05% (87 runs sampled)
  utils-copy       x 16,997 ops/sec ±0.95% (98 runs sampled)
  node-v8-clone    x 52,232 ops/sec ±0.59% (102 runs sampled)
  deep-copy        x 22,881 ops/sec ±0.88% (89 runs sampled)
  extend           x 17,177 ops/sec ±0.82% (92 runs sampled)
```

- Fastest is **node-v8-clone**
  - *this uses `C++` extension and does not currently work with io.js*
- Second is `stringify-clone` / `JSON.stringify`
  - *my preferred method, native, and always available, less memory usage, and natively optimized*
  - `stringify-clone` is just a wrapper around `JSON.parse(JSON.stringify())`
- Slowest is **clone-extend**
