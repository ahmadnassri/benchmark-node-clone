# [Benchmark]: Deep Cloning Objects

## Libraries Tested

- [clone](https://www.npmjs.com/package/clone) `v2.0.0`
- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.2.4`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.3`
- [deep-copy](https://www.npmjs.com/package/deep-copy) `v1.1.2`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.6.1`
- [extend](https://www.npmjs.com/package/extend) `v3.0.0`
- [lodash](https://www.npmjs.com/package/lodash) `v4.17.2`
- ~~[node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`~~ *uses a `C++` extension, does not work with node > `v0.12.x`*
- ~~[safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.1.2`~~ *stopped working with node >= `v5.x`*
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v2.0.0` - *this is just a wrapper around `JSON.parse(JSON.stringify())`*
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.1.1`


### Preferred Method

- `JSON.stringify`
  - is native, and always available, less memory usage, and natively optimized
  - `stringify-clone` provides a convenient wrapper

## Results

### `Node.js v7.1.x` *(Nov, 19, 2016)*

###### Fastest
```
  component-clone  x 59,647 ops/sec ±0.41% (93 runs sampled)
```
###### Slowest
```
  utils-copy       x 15,725 ops/sec ±0.59% (94 runs sampled)
```
###### Results
```
  JSON.stringify   x 56,798 ops/sec ±0.45% (94 runs sampled)
  stringify-clone  x 57,129 ops/sec ±0.62% (92 runs sampled)
  clone            x 25,178 ops/sec ±0.52% (94 runs sampled)
  clone-deep       x 22,095 ops/sec ±0.86% (95 runs sampled)
  clone-extend     x 18,640 ops/sec ±0.62% (96 runs sampled)
  cloneextend      x 41,593 ops/sec ±1.20% (90 runs sampled)
  component-clone  x 59,647 ops/sec ±0.41% (93 runs sampled)
  deepcopy         x 24,879 ops/sec ±0.64% (91 runs sampled)
  lodash           x 29,457 ops/sec ±0.72% (96 runs sampled)
  structured-clone x 34,271 ops/sec ±0.64% (93 runs sampled)
  utils-copy       x 15,725 ops/sec ±0.59% (94 runs sampled)
  deep-copy        x 36,721 ops/sec ±0.78% (95 runs sampled)
  extend           x 51,577 ops/sec ±0.49% (98 runs sampled)
```

### `Node.js v6.9.x` *(Nov, 19, 2016)*

###### Fastest
```
  deep-copy        x 216,573 ops/sec ±0.73% (91 runs sampled)
```
###### Slowest
```
  utils-copy       x  10,201 ops/sec ±2.58% (94 runs sampled)
```
###### Results
```
  JSON.stringify   x  56,182 ops/sec ±0.50% (94 runs sampled)
  stringify-clone  x  55,868 ops/sec ±0.61% (93 runs sampled)
  clone            x  20,265 ops/sec ±0.52% (92 runs sampled)
  clone-deep       x  24,750 ops/sec ±0.71% (90 runs sampled)
  clone-extend     x  13,499 ops/sec ±0.74% (96 runs sampled)
  cloneextend      x  34,848 ops/sec ±0.71% (94 runs sampled)
  component-clone  x  24,539 ops/sec ±0.46% (96 runs sampled)
  deepcopy         x  13,522 ops/sec ±0.54% (90 runs sampled)
  lodash           x  21,407 ops/sec ±0.76% (93 runs sampled)
  structured-clone x  38,789 ops/sec ±1.39% (88 runs sampled)
  utils-copy       x  10,201 ops/sec ±2.58% (94 runs sampled)
  deep-copy        x 216,573 ops/sec ±0.73% (91 runs sampled)
  extend           x  20,651 ops/sec ±0.86% (92 runs sampled)
```

### `Node.js v4.6.x` *(Nov, 19, 2016)*

###### Fastest
```
  stringify-clone  x 48,761 ops/sec ±1.80% (84 runs sampled)
```
###### Slowest
```
  utils-copy       x  5,051 ops/sec ±3.02% (92 runs sampled)
```
###### Results
```
  JSON.stringify   x 47,165 ops/sec ±2.42% (80 runs sampled)
  stringify-clone  x 48,761 ops/sec ±1.80% (84 runs sampled)
  clone            x 17,978 ops/sec ±1.41% (95 runs sampled)
  clone-deep       x 15,145 ops/sec ±3.02% (86 runs sampled)
  clone-extend     x 12,399 ops/sec ±2.23% (92 runs sampled)
  cloneextend      x 23,147 ops/sec ±2.53% (83 runs sampled)
  component-clone  x 26,285 ops/sec ±2.10% (89 runs sampled)
  deepcopy         x 13,989 ops/sec ±3.34% (88 runs sampled)
  lodash           x 13,534 ops/sec ±4.64% (77 runs sampled)
  structured-clone x 34,584 ops/sec ±2.69% (88 runs sampled)
  utils-copy       x  5,051 ops/sec ±3.02% (92 runs sampled)
  deep-copy        x 36,205 ops/sec ±2.01% (89 runs sampled)
  extend           x 20,562 ops/sec ±2.22% (74 runs sampled)
```
