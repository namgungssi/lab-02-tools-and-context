'use strict';


const fp = module.exports = {};



fp.map = function (array, callback) {
  return Array.prototype.map.call (array, callback);
};

fp.mappApply = function (array, callback) {
  callback = Array.isArray (callback) ? callback : [callback];
  return Array.prototype.map.apply (array, callback);
};


let mapArray = [1, 2, 3];
let mapCB = n => n * 2;

functions.prototype.mapBind = function() {
  return Array.prototype.map.call (this.array, this.callback);
  .bind ({array : mapArray,
          callback : mapCB});



let mapArray2 = [one, two, three];
let mapCB2 = index. index.toLowerCase ();

functions.prototype.mapBind2 = function () {
  return Array.prototype.map.call (this.array, this.callback);
  .bind ({array : mapArrayTwo, callback : mapCBTwo})
}};
//map


fp.filter = (list, arg) => Array.prototype.filter.apply(list, arg);
//filter

fp.reduce = (list, arg, init=0) => Array.prototype.reduce.apply(list, arg, init);
//reduce

fp.concat = (list, ...args) => Array.prototype.concat.apply(list, args);
//concat

fp.splice = (list, arg) => Array.prototype.splice.apply(list, arg);
//splice
