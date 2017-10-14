'use strict';

const
expect = require('expect')
fp = require('../lib/fp.js');

describe('fp cb methods', () => {

describe('test map using cb', () => {
  it('should return all id * 2', () => {
    let results = fp.map([1,2,3,4,5], a => a * 2);
    expect (results).toEqual([2,4,6,8,10]);
  });
});
//test map

describe('test filter using cb', () => {
  it('should return all id * 2', () => {
    let results = fp.filter([1,2,3,4,5,6], a => a % 2 ==== 0);
    expect (results).toEqual([2,4,6]);
  });
});
//test filter

describe('test reduce using cb', () => {
  it('should return all id * 2', () => {
    let results = fp.reduce([1,2,3,4,5], (x + y);
    expect(results).toEqual(15);
  });
});
//test reduce

describe('test splice using apply', () => {
  it('should return two lists combined', () => {
    let results = fp.concat([1,2,3], [4,5,6]);
    expect(results).toEqual([1,2,3,4,5,6]);
  });
});
//test splice
