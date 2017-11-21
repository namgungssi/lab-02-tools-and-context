'use strict';



const fp = require('../lib/fp.js');
const expect = require('expect')



//test map
describe ('map testing', function() {
  it('map testing [3,6,9]', function() {
    let result = fp.mapCall([1,2,3], n => n * 3);
    expect(result).toEqual([3,6,9]);

  });


  it('should return 5,10,20', function() {
    let result = fp.mapApply([1,2,4], n => n * 5);
    expect(result).toEqual([5,10,20]);

  });


  it('should return 4,7,10', function() {
    let result = fp.mapBind([1,4,7], n => n + 3);
    expect(result).toEqual([4,7,10]);

  });


//test filter
describe('filter testing', function() {
  it('should return 1,2,3', function() {
      let result = fp.filterCall([2,4,5], n => n > 3);
      expect(result).toEqual([4,5]);

  });


  it('should return 2,3,4', function() {
    let result = fp.filterApply([3,4,5], n => n < 1);
    expect(result).toEqual([]);

  });


  it('should return 20, 40, 60', function() {
    let result = fp.filterBind([5,10,15,20,40,60], n => n > 16);
    expect(result).toEqual([20,40,60]);

  });
});



describe('reduce testing', function() {
  it('should return 9', function() {
    let result = fp.reduceCall([2,3,4], (acc, cur) => acc + cur);
    expect(result).toEqual(9);

});


  it('should return 54', function() {
    let result = fp.reduceApply([10,10,34], (acc, cur) => acc + cur);
    expect(result).toEqual(54);

  });
});



describe('concat testing', function() {
  it('should return 1,2,5', function() {
    let result = fp.concatCall([1,2,5]);
    expect(result).toEqual([1,2,5]);

  });


  it('should return 3,4,10', function() {
    let result = fp.concatApply([3,4], 10);
    expect(result).toEqual([3,4,10]);

  });


  it('should return all 5', function() {
    let result = fp.concatBind([5,5], 5);
    expect(result).toEqual([5,5,5]);

  });
});



describe('splie testing', function() {
  it('should return 3,4', function() {
    let result = fp.spliceCall([2,3,4], 1,2);
    expect(result).toEqual([3,4]);

  });


  it('should return 20', function() {
    let result = fp.spliceApply([5,10,20], 2,1);
    expect(result).toEqual([20]);

  });


  it('should return 19, 20, 21, 22', function() {
    let result = fp.spliceBind([18,19,20,21,22], 1,1);
    expect(result).toEqual([19,20,21,22]);

  });

});
