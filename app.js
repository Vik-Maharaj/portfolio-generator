const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

// other examples to follow here
   
// Include process module
const process = require('process');
  
// Printing process.argv property value
console.log(process.argv);

// Node.js program to demonstrate the
// process.argv Property
   
// Include process module
const process = require('process');
  
// Printing process.argv property value
var args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});