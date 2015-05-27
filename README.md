# Node Object Deep Cloning Benchmarks

## Libraries Tested

- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.1.1`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v1.1.0`
- [clone](https://www.npmjs.com/package/clone) `v1.0.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.2`
- [deep-copy](https://www.npmjs.com/package/deep-copy) `v1.0.0`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.5.0`
- [extend](https://www.npmjs.com/package/extend) `v2.0.1`
- [lodash](https://www.npmjs.com/package/lodash) `v3.9.3`
- [node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`
- [safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.0.5`
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.0.0`

## Latest results

### Node 0.12.x
```
  JSON.stringify   x 30,040 ops/sec ±1.20% (89 runs sampled)
  stringify-clone  x 29,676 ops/sec ±1.36% (90 runs sampled)
  clone            x 13,038 ops/sec ±1.60% (89 runs sampled)
  clone-deep       x 19,968 ops/sec ±1.00% (91 runs sampled)
  clone-extend     x  5,739 ops/sec ±1.17% (88 runs sampled)
  cloneextend      x 14,654 ops/sec ±1.25% (84 runs sampled)
  component-clone  x 12,487 ops/sec ±1.31% (91 runs sampled)
  deepcopy         x 10,593 ops/sec ±1.28% (88 runs sampled)
  lodash           x 16,282 ops/sec ±1.98% (83 runs sampled)
  safe-clone-deep  x 22,070 ops/sec ±2.78% (85 runs sampled)
  structured-clone x 13,899 ops/sec ±2.63% (81 runs sampled)
  utils-copy       x 10,929 ops/sec ±1.80% (87 runs sampled)
  node-v8-clone    x 31,540 ops/sec ±2.11% (80 runs sampled)
  deep-copy        x 13,659 ops/sec ±2.34% (78 runs sampled)
  extend           x 11,157 ops/sec ±2.55% (85 runs sampled)
```

- Fastest is **node-v8-clone**
  - *this uses `C++` extension and does not currently work with io.js*
- Second is `stringify-clone` / `JSON.stringify`
  - *my preferred method, native, and always available, less memory usage, and natively optimized*
  - `stringify-clone` is just a wrapper around `JSON.parse(JSON.stringify())`
- Slowest is **clone-extend**
