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
