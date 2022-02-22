//make a function that counds how many sheep are present in the given array
function countSheeps(arrayOfSheep) {
  let numberOfSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      numberOfSheep++;
    }
  }
  return numberOfSheep;
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(array1));
