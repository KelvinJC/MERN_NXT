const names = require('./2-names')
const sayHi = require('./3-utils')


const {john, peter} = names;
console.log(names);
console.log(john);
console.log(peter);

sayHi('susan')
sayHi(john)
sayHi(peter)
