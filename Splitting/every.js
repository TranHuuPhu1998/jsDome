const isBelowThreshold = (currentValue) => currentValue < 40;
// console.log(isBelowThreshold); //?
const array1 = [1, 30, 39, 29, 10, 13,41];

console.log(array1.every((currentValue) => currentValue < 40));
// expected output: true

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));