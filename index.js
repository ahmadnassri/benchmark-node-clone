// dependencies
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')
const chalk = require('chalk')
const fixture = require('./fixture')

// libs
const clone = require('clone')
const cloneDeep = require('clone-deep')
const cloneExtend = require('clone-extend')
const cloneextend = require('cloneextend')
const componentClone = require('component-clone')
const dcopy = require('deep-copy')
const deepcopy = require('deepcopy')
const extend = require('extend')
const lodash = require('lodash')
const stringifyClone = require('stringify-clone')
const structuredClone = require('structured-clone')
const utilsCopy = require('utils-copy')

new Benchmark.Suite()
  .add('JSON.stringify', () => JSON.parse(JSON.stringify(fixture)))
  .add('stringify-clone', () => stringifyClone(fixture))
  .add('clone', () => clone(fixture))
  .add('clone-deep', () => cloneDeep(fixture))
  .add('clone-extend', () => cloneExtend(fixture, {}))
  .add('cloneextend', () => cloneextend.clone(fixture))
  .add('component-clone', () => componentClone(fixture))
  .add('deepcopy', () => deepcopy(fixture))
  .add('lodash', () => lodash.cloneDeep(fixture))
  .add('structured-clone', () => structuredClone(fixture))
  .add('utils-copy', () => utilsCopy(fixture))
  .add('deep-copy', () => dcopy(fixture))
  .add('extend', () => extend(true, {}, fixture))

  // add listeners
  .on('cycle', (event) => benchmarks.add(event.target))

  .on('complete', function () {
    benchmarks.log()

    console.log('Fastest is %s', chalk.green(this.filter('fastest').map('name')))
    console.log('Slowest is %s', chalk.red(this.filter('slowest').map('name')))
  })

  .run({ async: true })
