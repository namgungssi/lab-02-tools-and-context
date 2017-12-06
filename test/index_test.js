'use strict';



const index = require('../lib/index.js');
const expect = require('expect');


let oldArgv;


describe('CLI', () => {
  after(() => {
    process.argv = oldArgv;

  });


  before(() => {
    oldArgv = process.argv;
    process.argv = ['node', 'index.js', 'HELLO', 'BRIAN'];

  });


  it('should return hello brian in caps', function() {
    expect(index()).toEqual('HELLO BRIAN');

  });
});
