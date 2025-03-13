//Berechne die Fakultät einer Zahl (Beispiel: 5! = 1 * 2 * 3 * 4 * 5)
//Calculate the factorial of a number (Example: 5! = 1 * 2 * 3 * 4 * 5)

function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Number must be positive");
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
