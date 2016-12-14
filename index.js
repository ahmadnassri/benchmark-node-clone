'use strict'

// dependencies
const assert = require('assert')
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')
const chalk = require('chalk')
const fixture = require('./fixture')

// libs
const clone = require('clone')
const clonedeep = require('clone-deep')
const cloneextend = require('clone-extend')
const cloneextendclone = require('cloneextend').clone
const componentclone = require('component-clone')
const deepcopy = require('deep-copy')
const deepclone = require('deepclone')
const deepcopy2 = require('deepcopy')
const extend = require('extend')
const fastclone = require('fast-clone')
const lodashcloneDeep = require('lodash').cloneDeep
const stringifyclone = require('stringify-clone')
const structuredclone = require('structured-clone')
const utilscopy = require('utils-copy')

const libs = {
  'clone': clone,
  'clone-deep': clonedeep,
  'clone-extend': data => cloneextend(data, {}),
  'cloneextend': cloneextendclone,
  'component-clone': componentclone,
  'deep-copy': deepcopy,
  'deepclone': deepclone,
  'deepcopy': deepcopy2,
  'extend': data => extend(true, {}, data),
  'fast-clone': fastclone,
  'lodash.cloneDeep': lodashcloneDeep,
  'stringify-clone': stringifyclone,
  'structured-clone': structuredclone,
  'utils-copy': utilscopy
}

const bench = new Benchmark.Suite()

// add listeners
bench.on('cycle', event => benchmarks.add(event.target))

bench.on('complete', function () {
  benchmarks.log()

  console.log('Fastest is %s', chalk.green(this.filter('fastest').map('name')))
  console.log('Slowest is %s', chalk.red(this.filter('slowest').map('name')))
})

// test all libs first
Object
  .keys(libs)
  .forEach(name => {
    assert.deepEqual(libs[name].call(null, fixture), fixture, name)

    bench.add(name, () => libs[name].call(null, fixture))
  })

bench.run({ async: true })
