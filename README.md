# [Benchmark]: Deep Cloning Objects

## Libraries Tested

- [clone](https://www.npmjs.com/package/clone) `v1.0.2`
- [clone-deep](https://www.npmjs.com/package/clone-deep) `v0.2.4`
- [clone-extend](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [cloneextend](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [component-clone](https://www.npmjs.com/package/component-clone) `v0.2.2`
- [deep-copy](https://www.npmjs.com/package/deep-copy) `v1.1.0`
- [deepcopy](https://www.npmjs.com/package/deepcopy) `v0.6.1`
- [extend](https://www.npmjs.com/package/extend) `v3.0.0`
- [lodash](https://www.npmjs.com/package/lodash) `v4.7.0`
- ~~[node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`~~ *uses a `C++` extension and does not currently only works with node v0.12.x*
- ~~[safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.1.2`~~ *stopped working with node >= `v5.x`*
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v1.1.1` - *this is just a wrapper around `JSON.parse(JSON.stringify())`*
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.1.1`


### Preferred Method

- `JSON.stringify`
  - is native, and always available, less memory usage, and natively optimized
  - `stringify-clone` provides a convenient wrapper

## Results

### `Node.js v5.7.x` *(Apr, 02, 2016)*

###### Fastest
```
  stringify-clone  x 50,661 ops/sec ±1.78% (74 runs sampled)
```
###### Slowest
```
  utils-copy       x  5,423 ops/sec ±2.22% (92 runs sampled)
```
###### Results
```
  JSON.stringify   x 49,606 ops/sec ±2.79% (88 runs sampled)
  stringify-clone  x 50,661 ops/sec ±1.78% (74 runs sampled)
  clone            x 25,753 ops/sec ±2.04% (88 runs sampled)
  clone-deep       x 15,649 ops/sec ±1.83% (90 runs sampled)
  clone-extend     x 12,471 ops/sec ±1.37% (88 runs sampled)
  cloneextend      x 22,666 ops/sec ±5.69% (71 runs sampled)
  component-clone  x 26,509 ops/sec ±5.60% (80 runs sampled)
  deepcopy         x 13,863 ops/sec ±4.34% (77 runs sampled)
  lodash           x 11,612 ops/sec ±3.92% (90 runs sampled)
  structured-clone x 34,165 ops/sec ±4.50% (81 runs sampled)
  utils-copy       x  5,423 ops/sec ±2.22% (92 runs sampled)
  deep-copy        x 36,848 ops/sec ±1.97% (91 runs sampled)
  extend           x 21,698 ops/sec ±2.35% (86 runs sampled)
```

### `Node.js v4.1.x` *(Oct 15, 2015)*

###### Fastest
```
  stringify-clone  x 45,601 ops/sec ±1.65% (91 runs sampled)
```
###### Slowest
```
  clone-extend     x 11,770 ops/sec ±1.39% (87 runs sampled)
```
###### Results
```
  JSON.stringify   x 45,039 ops/sec ±1.87% (85 runs sampled)
  stringify-clone  x 45,601 ops/sec ±1.65% (91 runs sampled)
  lodash           x 42,134 ops/sec ±3.26% (93 runs sampled)
  deep-copy        x 36,650 ops/sec ±2.81% (87 runs sampled)
  structured-clone x 33,017 ops/sec ±2.33% (90 runs sampled)
  component-clone  x 28,422 ops/sec ±2.58% (94 runs sampled)
  utils-copy       x 19,427 ops/sec ±1.41% (98 runs sampled)
  cloneextend      x 19,349 ops/sec ±4.58% (81 runs sampled)
  extend           x 18,642 ops/sec ±2.59% (92 runs sampled)
  clone            x 25,698 ops/sec ±1.94% (93 runs sampled)
  deepcopy         x 21,034 ops/sec ±2.14% (92 runs sampled)
  clone-deep       x 15,806 ops/sec ±2.38% (86 runs sampled)
  clone-extend     x 11,770 ops/sec ±1.39% (87 runs sampled)
```

----

### `Node.js v0.12.x` *(Jul 22, 2015)*

###### Fastest
```
  node-v8-clone    x 39,178 ops/sec ±1.38% (91 runs sampled)
```
###### Slowest
```
  clone-extend     x  5,289 ops/sec ±2.47% (86 runs sampled)
```
###### Results
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

----

### `Node.js v0.10.x` *(Jul 22, 2015)*

###### Fastest
```
  node-v8-clone    x 35,616 ops/sec ±1.08% (97 runs sampled)
```
###### Slowest
```
  clone-extend     x  7,304 ops/sec ±1.51% (94 runs sampled)
```
###### Results
```
  node-v8-clone    x 35,616 ops/sec ±1.08% (97 runs sampled)
  safe-clone-deep  x 30,726 ops/sec ±1.32% (93 runs sampled)
  stringify-clone  x 27,915 ops/sec ±1.54% (93 runs sampled)
  JSON.stringify   x 27,401 ops/sec ±1.38% (89 runs sampled)
  deep-copy        x 23,833 ops/sec ±1.25% (95 runs sampled)
  deepcopy         x 23,777 ops/sec ±0.92% (92 runs sampled)
  lodash           x 22,843 ops/sec ±1.05% (93 runs sampled)
  cloneextend      x 21,237 ops/sec ±1.31% (90 runs sampled)
  structured-clone x 26,142 ops/sec ±0.86% (96 runs sampled)
  extend           x 18,460 ops/sec ±1.71% (95 runs sampled)
  clone            x 18,021 ops/sec ±1.46% (95 runs sampled)
  utils-copy       x 16,321 ops/sec ±0.76% (97 runs sampled)
  component-clone  x 15,941 ops/sec ±1.29% (92 runs sampled)
  clone-deep       x 15,651 ops/sec ±1.77% (91 runs sampled)
  clone-extend     x  7,304 ops/sec ±1.51% (94 runs sampled)
```
