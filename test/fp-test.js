'use strict';



const express = require('express');
const fp = require('../lib/fp.js');



//test map
describe('map using call', () => {
  it('should return [12, 24, 36, 48]', () => {
    expect(fp.mapCall([4,8,12,16], n => n * 3)).toEqual([12, 24, 36, 48]);

  });
});


describe('map using apply', () => {
  it('should return [12,24,36,48]', () => {
    expect(fp.mapApply([4,8,12,16], n => n * 3)).toEqual([12, 24, 36, 48]);

  });
});


describe('map using bind', () => {
  it('should return [12,24,36,48]', () => {
    expect(fp.mapBind([4,6,12,16], n => n * 3)).toEqual([12,24,36,48]);

  });
});


//filter test
describe('filter using cb', () => {
  it('should return [19,25,61]', () => {
    expect(fp.filterCall([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);

  });
});


describe('filter using apply', () => {
  it('should return [19,25,61]', () => {
    expect(fp.filterApply([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);

  });
});


describe('filter using bind cb', () => {
  it('should return [19,25,61]', () => {
    expect(fp.filterBind([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);

  });
});


//concat test
describe('concat using call', () => {
  it('should return [1,2,3,4, \'see ya]', () => {
    expect(fp.concatCall([1,2,3,4], 'see ya')).toEqual([1,2,3,4, 'see ya']);

  });
});

  it('should return [1,2,3,4, \'see ya]', () => {
    expect(fp.concatApply([1,2,3,4], 'see ya')).toEqual([1,2,3,4, 'see ya']);

  });
});


describe('concat using bind', () => {
  it('should return [1,2,3,4, \'see ya]', () => {
    expet(fp.concatBind([1,2,3,4], 'see ya')).toEqual([1,2,3,4, 'see ya']);

  });
});


//reduce testing
describe('reduce using call', () => {
  it('should return 20', () => {
    expect(fp.reduceCall([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);

  });
});


describe('reduce using apply', () => {
  it('should return 20', () => {
    expect(fp.reduceApply([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);

  });
});


describe('reduce using bind', () => {
  it('should return 10', () => {
    expect(fp.reduceBind([1,2,3,4], (a,c) => a + c, 0)).toEqual(10);

  });
});


//splice testing
describe('splice using call', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceCall(["heaven", "hell", "orange", "life"], 2, 1).toEqual(["orange"]);

  });

  it('should return ["heaven", "hell", "orange", "life"]', () => {
    expect(fp.spliceCall(["heaven", "hell", "orange", "life"], 1, 2)).toEqual(["heaven", "orange"]);

});

  it('should return []', () => {
    expect(fp.spliceCall(["heaven", "hell", "orange", "life"], 2, 9, "apple", "grapes")).toEqual([]);

  });
});


describe('splice using apply', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceApply(["heaven", "hell", "orange", "life"], 2, 1)).toEqual(["orange"]);

  });

  it('should return ["hell", "orange"]', () => {
    expect(fp.spliceApply(["heaven", "hell", "orange", "life"], 1, 2)).toEqual(["hell", "orange"]);

  });

  it('should return []', () => {
    expect(fp.spliceApply(["heaven", "hell", "orange", "life"], 2, 0, "apple", "grapes")).toEqual([]);

  });
});


describe('splice using bind', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceBind(["heaven", "hell", "orange", "life"], 2, 1)).toEqual(["orange"]);

  });

  it('should return ["hell", "orange"]', () => {
    expect(fp.spliceBind(["heaven", "hell", "orange", "life"], 1, 2)).toEqual(["hell", "orange"]);

  });

  it('should return []', () => {
    expect(fp.spliceBind(["heaven", "hell", "orange", "life"], 2, 0, "apple", "grape")).toEqual([]);

  });
});
