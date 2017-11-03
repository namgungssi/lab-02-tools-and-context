'use strict';


const fp = module.exports = {};


//map
fp.map = function (array, callback) {
  return Array.prototype.map.call (array, callback);
};

fp.mappApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.map.apply (array, callback);
};


let mapArray = [1, 2, 3];
let mapCB = number => number * 1;

fp.prototype.mapBind = function() {
  return Array.prototype.map.call (this.array, this.callback);
}.bind ({array : mapArray,
          callback : mapCB});



let mapArray2 = ['one', 'two', 'three'];
let mapCB2 = index => index();

fp.prototype.mapBind2 = function () {
  return Array.prototype.map.call (this.array, this.callback);
}.bind ({array : mapArrayTwo, callback : mapCBTwo})
};



//filter
fp.filterCall = function (array, callback) {
  return Array.prototype.filter.call (array, callback);
};

fp.filterApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.filter.apply (array, callback);
};

let filterArray = [1, 2, 3];
let filterCB = number => number < 1;

fp.filterBind = function () {
  return Array.prototype.filter.call (this.array, this.callback);
}.bind ({array : filterArray, callback : filterCB});

let filterArrayTwo = ['one', 'two', 'three'];
let filterCBTwo = word => word.length < 1;

fp.filterBindTwo = function () {
  return Array.prototype.filter.call (this.array, this.callback);
}.bind ({array : filterArrayTwo, callback : filterCBTwo});
};








fp.filter = (list, arg) => Array.prototype.filter.apply(list, arg);
//filter

fp.reduce = (list, arg, init=0) => Array.prototype.reduce.apply(list, arg, init);
//reduce

fp.concat = (list, ...args) => Array.prototype.concat.apply(list, args);
//concat

fp.splice = (list, arg) => Array.prototype.splice.apply(list, arg);
//splice
