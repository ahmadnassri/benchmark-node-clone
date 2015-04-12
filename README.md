# Node Object Deep Cloning Benchmarks

## Libraries Tested

- JSON.stringify
- [clone](http://npm.im/clone) `v1.0.2`
- [clone-deep](http://npm.im/clone-deep) `v0.1.1`
- [clone-extend](http://npm.im/clone-extend) `v0.1.2`
- [component-clone](http://npm.im/component-clone) `v0.2.2`
- [deepcopy](http://npm.im/deepcopy) `v0.5.0`
- [lodash](http://npm.im/lodash) `v3.6.0`
- [node-v8-clone](http://npm.im/node-v8-clone) `v0.6.2`
- [safe-clone-deep](http://npm.im/safe-clone-deep) `v1.0.5`
- [structured-clone](http://npm.im/structured-clone) `v0.2.2`
- [utils-copy](http://npm.im/utils-copy) `v1.0.0`

## Latest results

```
  JSON.stringify   x    38,549 ops/sec ±1.91% (91 runs sampled)
  clone            x    16,070 ops/sec ±2.16% (98 runs sampled)
  clone-deep       x    25,164 ops/sec ±2.75% (86 runs sampled)
  clone-extend     x     7,676 ops/sec ±2.46% (97 runs sampled)
  component-clone  x    16,572 ops/sec ±2.28% (97 runs sampled)
  lodash           x    22,509 ops/sec ±3.74% (87 runs sampled)
  deepcopy         x    13,603 ops/sec ±3.67% (95 runs sampled)
  safe-clone-deep  x    32,522 ops/sec ±2.26% (96 runs sampled)
  structured-clone x    21,270 ops/sec ±2.14% (93 runs sampled)
  utils-copy       x    16,111 ops/sec ±2.53% (98 runs sampled)
  node-v8-clone    x 7,716,270 ops/sec ±2.81% (94 runs sampled)
```

- Fastest is node-v8-clone
- Slowest is clone-extend
