'use strict';


const fp = module.exports = {};


let mapArray = [1, 2, 3];
let mapArrayTwo = ['one', 'two', 'three'];
let mapCB = number => number * 1;
let mapCB2 = index => index();
let filterArray = [1, 2, 3];
let filterArrayTwo = ['one', 'two', 'three'];
let filterCB = number => number < 1;
let filterCBTwo = word => word.length < 1;
let spliceArray = array;
let spliceBindArray = ['four', 'five', 'six'];



//map
fp.prototype.map = function (array, callback) {
  return Array.prototype.map.call (array, callback);
};


fp.prototype.mappApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.map.apply (array, callback);
};


fp.prototype.mapBind = function() {
  return Array.prototype.map.call (this.array, this.callback);
}.bind ({array : mapArray, callback : mapCB})
};


fp.prototype.mapBindTwo = function () {
  return Array.prototype.map.call (this.array, this.callback);
}.bind ({array : mapArrayTwo, callback : mapCBTwo})
};



//filter
fp.prototype.filterCall = function (array, callback) {
  return Array.prototype.filter.call (array, callback);
};


fp.prototype.filterApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.filter.apply (array, callback);
};


fp.prototype.filterBind = function () {
  return Array.prototype.filter.call (this.array, this.callback);
}.bind ({array : filterArray, callback : filterCB});


fp.prototype.filterBindTwo = function () {
  return Array.prototype.filter.call (this.array, this.callback);
}.bind ({array : filterArrayTwo, callback : filterCBTwo});
};



//reduce
fp.prototype.reduceCall = function (array, callback) {
  return Array.prototype.reduce.call (array, callback);
};


fp.prototype.reduceApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.reduce.apply (array, callback);
};


fp.prototype.reduceWithBind = function () {
  return Array.prototype.reduce.call (this.prev, this.callback, null);
}.bind ({prev : array, callback : callback}, null);
};



//splice
fp.prototype.spliceCall = function (array, argument) {
  return Array.prototype.splice.call (array, argument);
};


fp.prototype.spliceApply = function (array, argument) {
callback = Array.isArray (argumentArray) ? argumentArray : [argumentArray];
  return Array.prototype.splice.apply (array, argument);
  return spliceArray;
};


fp.prototype.spliceBind = function () {
  callback = Array.prototype.splice.call (this.array, this.args);
}.bind ({array : spliceArray, argument : index);
  return spliceArray;
};
