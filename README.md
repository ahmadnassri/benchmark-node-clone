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
  JSON.stringify   x    40,353 ops/sec ±1.99% (90 runs sampled)
  clone            x    17,075 ops/sec ±2.84% (98 runs sampled)
  clone-deep       x    25,433 ops/sec ±2.88% (90 runs sampled)
  clone-extend     x     7,435 ops/sec ±2.54% (91 runs sampled)
  cloneextend      x    17,953 ops/sec ±5.16% (86 runs sampled)
  component-clone  x    15,670 ops/sec ±2.82% (95 runs sampled)
  deepcopy         x    13,075 ops/sec ±3.31% (89 runs sampled)
  lodash           x    22,766 ops/sec ±2.88% (92 runs sampled)
  safe-clone-deep  x    30,656 ops/sec ±4.10% (92 runs sampled)
  structured-clone x    20,181 ops/sec ±1.94% (97 runs sampled)
  utils-copy       x    15,843 ops/sec ±3.37% (95 runs sampled)
  node-v8-clone    x 7,977,703 ops/sec ±2.99% (87 runs sampled)
```

- Fastest is **node-v8-clone**
- Slowest is **clone-extend**
