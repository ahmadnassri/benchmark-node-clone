# Node Object Deep Cloning Benchmarks

## Libraries Tested

- JSON.stringify
- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.1.1`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [clone](https://www.npmjs.com/package/clone) `v1.0.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.2`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.5.0`
- [lodash](https://www.npmjs.com/package/lodash) `v3.6.0`
- [node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`
- [safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.0.5`
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.0.0`

## Latest results

```
  JSON.stringify   x 40,423 ops/sec ±1.77% (87 runs sampled)
  clone            x 17,677 ops/sec ±2.36% (93 runs sampled)
  clone-deep       x 26,574 ops/sec ±2.45% (92 runs sampled)
  clone-extend     x  7,978 ops/sec ±2.07% (97 runs sampled)
  cloneextend      x 20,151 ops/sec ±1.95% (93 runs sampled)
  component-clone  x 16,645 ops/sec ±2.05% (97 runs sampled)
  deepcopy         x 14,660 ops/sec ±2.06% (99 runs sampled)
  lodash           x 23,652 ops/sec ±1.75% (94 runs sampled)
  safe-clone-deep  x 32,138 ops/sec ±2.71% (91 runs sampled)
  structured-clone x 21,190 ops/sec ±1.79% (97 runs sampled)
  utils-copy       x 16,457 ops/sec ±1.94% (93 runs sampled)
  node-v8-clone    x 49,841 ops/sec ±1.72% (95 runs sampled)
```

- Fastest is **node-v8-clone**
  - *this uses `C++` extension and does not currently work with io.js*
- Second is `JSON.stringify` 
  - *my preferred method, native, and always available, less memory usage, and natively optimized*
- Slowest is **clone-extend**
