const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);


const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    
};

printProfileData(profileDataArgs);



let two = 'two: declared outside the block';

if (true === true) {
  let two = 'two: declared inside the block';
  console.log(two); // prints 'two: declared inside the block'
}

console.log(two); 