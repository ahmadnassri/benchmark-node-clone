'use strict'

var fixture = require('./fixture')
var Benchmark = require('benchmark')
var benchmarks = require('beautify-benchmark')

var chalk = require('chalk')

var clone = require('clone')
var cloneDeep = require('clone-deep')
var cloneExtend = require('clone-extend')
var cloneextend = require('cloneextend')
var componentClone = require('component-clone')
var deepcopy = require('deepcopy')
var lodash = require('lodash')
var safeCloneDeep = require('safe-clone-deep')
var structuredClone = require('structured-clone')
var utilsCopy = require('utils-copy')
var v8clone = require('node-v8-clone').clone

var suite = new Benchmark.Suite()

suite.add('JSON.stringify', function () {
  JSON.parse(JSON.stringify(fixture))
})

.add('clone', function () {
  clone(fixture)
})

.add('clone-deep', function () {
  cloneDeep(fixture)
})

.add('clone-extend', function () {
  cloneExtend(fixture, {})
})

.add('cloneextend', function () {
  cloneextend.clone(fixture)
})

.add('component-clone', function () {
  componentClone(fixture)
})

.add('deepcopy', function () {
  deepcopy(fixture)
})

.add('lodash', function () {
  lodash.cloneDeep(fixture)
})

.add('safe-clone-deep', function () {
  safeCloneDeep(fixture)
})

.add('structured-clone', function () {
  structuredClone(fixture)
})

.add('utils-copy', function () {
  utilsCopy(fixture)
})

.add('node-v8-clone', function () {
  v8clone(fixture)
})

// add listeners
.on('cycle', function (event) {
  benchmarks.add(event.target)
})

.on('complete', function () {
  benchmarks.log()

  console.log('Fastest is %s', chalk.green(this.filter('fastest').pluck('name')))
  console.log('Slowest is %s', chalk.red(this.filter('slowest').pluck('name')))
})

.run({
  'async': true
})
