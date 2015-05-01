# Node Object Deep Cloning Benchmarks

## Libraries Tested

- JSON.stringify
- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.1.1`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
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

```
  node-v8-clone    x 49,420 ops/sec ±0.72% (96 runs sampled)
  JSON.stringify   x 42,698 ops/sec ±0.76% (83 runs sampled)
  safe-clone-deep  x 32,948 ops/sec ±0.64% (94 runs sampled)
  clone-deep       x 24,990 ops/sec ±0.71% (94 runs sampled)
  lodash           x 23,186 ops/sec ±0.97% (89 runs sampled)
  structured-clone x 21,320 ops/sec ±0.81% (99 runs sampled)
  deep-copy        x 20,520 ops/sec ±1.20% (88 runs sampled)
  cloneextend      x 19,980 ops/sec ±0.55% (98 runs sampled)
  clone            x 17,274 ops/sec ±0.56% (102 runs sampled)
  utils-copy       x 15,676 ops/sec ±0.93% (95 runs sampled)
  extend           x 15,746 ops/sec ±0.98% (95 runs sampled)
  component-clone  x 15,398 ops/sec ±3.07% (93 runs sampled)
  deepcopy         x 13,945 ops/sec ±1.01% (98 runs sampled)
  clone-extend     x  7,891 ops/sec ±0.44% (97 runs sampled)
```

- Fastest is **node-v8-clone**
  - *this uses `C++` extension and does not currently work with io.js*
- Second is `JSON.stringify`
  - *my preferred method, native, and always available, less memory usage, and natively optimized*
- Slowest is **clone-extend**
