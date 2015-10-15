# [Benchmark]: Deep Cloning Objects

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
- [node-v8-clone](https://www.npmjs.com/package/node-v8-clone) `v0.6.2` - *this uses `C++` extension and does not currently only works with io.js / node v0.12.x*
- [safe-clone-deep](https://www.npmjs.com/package/safe-clone-deep) `v1.0.5`
- [stringify-clone](https://www.npmjs.com/package/stringify-clone) `v1.1.0` - *this is just a wrapper around `JSON.parse(JSON.stringify())`*
- [structured-clone](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [utils-copy](https://www.npmjs.com/package/utils-copy) `v1.0.0`


### Preferred Method

- `JSON.stringify`
  - is native, and always available, less memory usage, and natively optimized
  - `stringify-clone` provides a convenient wrapper

## Results

### `Node.js v4.1.x`

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

### `Node.js v0.12.x`

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

### `Node.js v0.10.x`

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

----

### `io.js v2.x.x`

###### Fastest
```
  safe-clone-deep  x 58,255 ops/sec ±1.90% (90 runs sampled)
```
###### Slowest
```
  clone-extend     x  7,929 ops/sec ±1.28% (92 runs sampled)
```
###### Results
```
  safe-clone-deep  x 58,255 ops/sec ±1.90% (90 runs sampled)
  JSON.stringify   x 33,321 ops/sec ±2.19% (86 runs sampled)
  stringify-clone  x 31,146 ops/sec ±3.03% (83 runs sampled)
  lodash           x 28,990 ops/sec ±1.67% (89 runs sampled)
  deep-copy        x 26,461 ops/sec ±2.28% (89 runs sampled)
  structured-clone x 23,364 ops/sec ±2.13% (83 runs sampled)
  clone-deep       x 20,325 ops/sec ±1.25% (95 runs sampled)
  component-clone  x 21,722 ops/sec ±1.24% (87 runs sampled)
  cloneextend      x 19,005 ops/sec ±1.84% (88 runs sampled)
  clone            x 17,456 ops/sec ±2.94% (88 runs sampled)
  extend           x 16,919 ops/sec ±1.90% (86 runs sampled)
  deepcopy         x 15,015 ops/sec ±1.37% (94 runs sampled)
  utils-copy       x 13,504 ops/sec ±1.58% (91 runs sampled)
  clone-extend     x  7,929 ops/sec ±1.28% (92 runs sampled)
```

----

### `io.js v1.x.x`

###### Fastest
```
  safe-clone-deep  x 51,930 ops/sec ±2.68% (89 runs sampled)
```
###### Slowest
```
  clone-extend     x  7,185 ops/sec ±2.49% (85 runs sampled)
```
###### Results
```
  safe-clone-deep  x 51,930 ops/sec ±2.68% (89 runs sampled)
  JSON.stringify   x 36,300 ops/sec ±0.96% (86 runs sampled)
  stringify-clone  x 35,220 ops/sec ±1.65% (94 runs sampled)
  deep-copy        x 26,934 ops/sec ±1.67% (92 runs sampled)
  lodash           x 25,982 ops/sec ±2.63% (83 runs sampled)
  cloneextend      x 20,753 ops/sec ±2.12% (88 runs sampled)
  clone-deep       x 20,143 ops/sec ±1.46% (89 runs sampled)
  component-clone  x 19,055 ops/sec ±2.38% (89 runs sampled)
  structured-clone x 17,425 ops/sec ±1.96% (92 runs sampled)
  extend           x 17,111 ops/sec ±1.09% (96 runs sampled)
  utils-copy       x 16,422 ops/sec ±1.06% (89 runs sampled)
  clone            x 14,379 ops/sec ±2.40% (90 runs sampled)
  deepcopy         x 13,781 ops/sec ±1.31% (91 runs sampled)
  clone-extend     x  7,185 ops/sec ±2.49% (85 runs sampled)
```
