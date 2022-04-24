const fs = require('fs');

const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2, process.argv.length);

const [ name, github ] = profileDataArgs;

// console.log(profileDataArgs);

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfilio complete! Check out index.html to see output!');
})
