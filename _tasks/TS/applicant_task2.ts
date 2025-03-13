// Schreibe eine Funktion, die die zweitgrößte Zahl innerhalb eines Arrays zurückgibt
// Write a function which return the second largest number within an array

function secondLargestNumber(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error("Array must have at least 2 elements");
  }

  arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(secondLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 9
