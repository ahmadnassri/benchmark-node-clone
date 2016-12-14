# [Benchmark]: Deep Cloning Objects

## Libraries Tested

- [`clone-deep`](https://www.npmjs.com/package/clone-deep) `v0.2.4`
- [`clone-extend`](https://www.npmjs.com/package/clone-extend) `v0.1.2`
- [`clone`](https://www.npmjs.com/package/clone) `v2.1.0`
- [`cloneextend`](https://www.npmjs.com/package/cloneextend) `v0.0.3`
- [`component-clone`](https://www.npmjs.com/package/component-clone) `v0.2.3`
- [`deep-copy`](https://www.npmjs.com/package/deep-copy) `v1.1.2`
- [`deepcopy`](https://www.npmjs.com/package/deepcopy) `v0.6.1`
- [`deepclone`](https://www.npmjs.com/package/deepclone) `v1.0.2`
- [`extend`](https://www.npmjs.com/package/extend) `v3.0.0`
- [`fast-clone`](https://www.npmjs.com/package/fast-clone) `v1.4.2`
- [`lodash`](https://www.npmjs.com/package/lodash) `v4.17.2`
- [`stringify-clone`](https://www.npmjs.com/package/stringify-clone) `v2.0.0` - *this is just a wrapper around `JSON.parse(JSON.stringify())`*
- [`structured-clone`](https://www.npmjs.com/package/structured-clone) `v0.2.2`
- [`utils-copy`](https://www.npmjs.com/package/utils-copy) `v1.1.1`
- ~~[`node-v8-clone`](https://www.npmjs.com/package/node-v8-clone) `v0.6.2`~~ *uses a `C++` extension, does not work with node > `v0.12.x`*
- ~~[`safe-clone-deep`](https://www.npmjs.com/package/safe-clone-deep) `v1.1.2`~~ *stopped working with node >= `v5.x`*


## Results

### `Node.js v7.2.x` *(Dec, 13, 2016)*

###### Fastest
```
  deep-copy        x 205,619 ops/sec ±1.82% (94 runs sampled)
```
###### Slowest
```
  utils-copy       x  14,985 ops/sec ±1.00% (93 runs sampled)
```
###### Results
```
  clone            x  23,682 ops/sec ±1.03% (90 runs sampled)
  clone-deep       x  42,803 ops/sec ±2.08% (89 runs sampled)
  clone-extend     x  17,618 ops/sec ±0.80% (91 runs sampled)
  cloneextend      x  40,788 ops/sec ±0.88% (92 runs sampled)
  component-clone  x  60,881 ops/sec ±1.37% (96 runs sampled)
  deep-copy        x 205,619 ops/sec ±1.82% (94 runs sampled)
  deepclone        x  24,356 ops/sec ±2.34% (90 runs sampled)
  deepcopy         x  24,833 ops/sec ±0.80% (95 runs sampled)
  extend           x  52,284 ops/sec ±0.73% (88 runs sampled)
  fast-clone       x  31,181 ops/sec ±1.68% (84 runs sampled)
  lodash.cloneDeep x  29,568 ops/sec ±1.41% (89 runs sampled)
  stringify-clone  x  51,015 ops/sec ±1.71% (88 runs sampled)
  structured-clone x  35,505 ops/sec ±0.75% (92 runs sampled)
  utils-copy       x  14,985 ops/sec ±1.00% (93 runs sampled)
```

### `Node.js v6.9.x` *(Dec, 13, 2016)*

###### Fastest
```
  deep-copy        x 205,727 ops/sec ±1.12% (91 runs sampled)
```
###### Slowest
```
  deepclone        x   9,045 ops/sec ±0.70% (92 runs sampled)
```
###### Results
```
  clone            x  19,151 ops/sec ±0.90% (93 runs sampled)
  clone-deep       x  24,586 ops/sec ±1.29% (92 runs sampled)
  clone-extend     x  13,206 ops/sec ±0.67% (91 runs sampled)
  cloneextend      x  29,955 ops/sec ±1.82% (92 runs sampled)
  component-clone  x  24,320 ops/sec ±0.75% (93 runs sampled)
  deep-copy        x 205,727 ops/sec ±1.12% (91 runs sampled)
  deepclone        x   9,045 ops/sec ±0.70% (92 runs sampled)
  deepcopy         x  13,843 ops/sec ±0.64% (93 runs sampled)
  extend           x  16,688 ops/sec ±1.24% (93 runs sampled)
  fast-clone       x  25,836 ops/sec ±2.20% (91 runs sampled)
  lodash.cloneDeep x  15,213 ops/sec ±1.49% (91 runs sampled)
  stringify-clone  x  53,364 ops/sec ±1.34% (94 runs sampled)
  structured-clone x  37,033 ops/sec ±0.91% (94 runs sampled)
  utils-copy       x  10,228 ops/sec ±0.96% (89 runs sampled)
```

### `Node.js v4.6.x` *(Dec, 13, 2016)*

###### Fastest
```
  deep-copy        x 38,524 ops/sec ±1.63% (86 runs sampled)
  stringify-clone  x 46,885 ops/sec ±1.14% (89 runs sampled) (see note below) 
```
###### Slowest
```
  utils-copy       x  6,486 ops/sec ±0.78% (90 runs sampled)
```
###### Results
```
  clone            x 16,739 ops/sec ±1.21% (89 runs sampled)
  clone-deep       x 14,594 ops/sec ±0.98% (91 runs sampled)
  clone-extend     x 12,290 ops/sec ±0.97% (91 runs sampled)
  cloneextend      x 26,058 ops/sec ±1.40% (80 runs sampled)
  component-clone  x 26,727 ops/sec ±0.81% (96 runs sampled)
  deep-copy        x 38,524 ops/sec ±1.63% (86 runs sampled)
  deepclone        x  7,474 ops/sec ±0.81% (94 runs sampled)
  deepcopy         x 14,172 ops/sec ±0.86% (96 runs sampled)
  extend           x 19,430 ops/sec ±0.80% (93 runs sampled)
  fast-clone       x 18,556 ops/sec ±0.92% (91 runs sampled)
  lodash.cloneDeep x 12,093 ops/sec ±1.47% (82 runs sampled)
  stringify-clone  x 46,885 ops/sec ±1.14% (89 runs sampled)
  structured-clone x 35,511 ops/sec ±0.98% (95 runs sampled)
  utils-copy       x  6,486 ops/sec ±0.78% (90 runs sampled)
```

although `stringify-clone` was fastest here, _it is just a wrapper around `JSON.parse(JSON.stringify())`_! 
and thus does not provide true deep cloning for complex objects, review the project's [README](https://github.com/ahmadnassri/stringify-clone) for details on limitations.
