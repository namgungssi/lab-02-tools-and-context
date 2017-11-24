'use strict';



const fp = module.exports = {};



fp.mapCall = (array, cb) => {
  return Array.prototype.map.call(array, cb);

};


fp.mapApply = (array, cb) => {
  return Array.prototype.map.apply(array, [cb]);

};


fp.mapBind = (n, cb) {
  return function() {
    return Array.prototype.map.call(this.n, this.cb);
  }.bind({ n:n, cb : cb })();

};


fp.filterCall = (array, cb) => {
  return Array.prototype.filter.call(array, cb);

};


fp.filterApply = (array, cb) => {
  return Array.prototype.filter.apply(array, [cb]);

};


fp.filterBind = (n, f) => {
  return function() {
    return Array.prototype.filter.call(this.n, this.f);
  }.bind({ n:n, f:f })();

};


fp.reduceCall = (sum, acc, cur) => {
  return Array.prototype.reduce.call(sum, acc, cur);

};


fp.reduceApply = (sum, acc, cur) => {
  return Array.prototype.reduce.apply(sum, [acc], cur);

};


fp.reduceBind = function (sum, acc, cur) {
  return function() {
    return Array.prototype.reduce.call(this.sum, this.acc, this.cur);
  }.bind({ sum:sum, acc:acc, cur:cur })();

};


fp.spliceCall = (array, ...myDog) => {
  return Array.prototype.splice.call(array, ...myDog);

};


fp.spliceApply = (array, ...myDog) => {
  return Array.prototype.concat.apply(array, ...[myDog]);

};


fp.spliceBind = function(f, a, ...n) {
  return function() {
    return Array.prototype.splice.call(this.f, this.a, this.n);
  }.bind({ f:f, a:a, n:n })();


fp.concatCall = (array, ...concatArray) => {
  return Array.prototype.concat.call(array, ...concatArray);

};


fp.concatApply = (array, ...concatArray) => {
  return Array.prototype.concat(list, ...concatArray);

};


fp.concatBind = function(v1, v2, ...vn) {
  return function() {
    return Array.prototype.concat(this.v1, this.v2, this.vn);
  }.bind({ v1:v1, v2:v2, vn:vn })();

};


fp.reduceCall = (sum, acc, startNum) => {
  return Array.prototype.reduce.call(sum, acc, startNum);

};
