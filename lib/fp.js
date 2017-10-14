'use strict';

const fp = module.exports = () => {};

fp.map = (list, arg) => Array.prototype.map.apply(list, arg);
//map

fp.filter = (list, arg) => Array.prototype.filter.apply(list, arg);
//filter

fp.reduce = (list, arg, init=0) => Array.prototype.reduce.apply(list, arg, init);
//reduce

fp.concat = (list, arg) => Array.prototype.concat.apply(list, arg);
//concat

fp.splice = (list, arg) => Array.prototype.splice.apply(list, arg);
//splice
