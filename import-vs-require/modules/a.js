console.log('hello from a')
var x1 = import('./b')
var x2 = require('./b')
console.log('neat', x1, x2)

x1.then((what)=>{
  console.log("WHAT", what)
})
