// Schreibe eine Funktion, die die zweitgrößte Zahl innerhalb eines Arrays zurückgibt
// Write a function which return the second largest number within an array

function getSecondLargestNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSecondLargestNumber(arr)); // 9
