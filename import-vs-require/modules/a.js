console.log('hello from a')
var x1 = import('./b')
var x2 = require('./b')

//THIS WILL FAIL
//false && require ('./c')

//BUT THIS DOES NOT
if (false){
  require('./c')
  import('./c')
}

console.log('neat', x1, x2)

x1.then((what)=>{
  console.log("WHAT", what)
})

console.log("GLOBAL", global)
console.log("Y", global.Y)
