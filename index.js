'use strict';



const fp = module.exports = {};



let upperCase = module.exports = () => {
  let list = fp.spliceCall(process.argv, 2);


  list = fp.mapCall(list, word => word.toUpperCase());
  let result = list.join(' ');
  console.log(result);
  return result;

};


upperCase();
