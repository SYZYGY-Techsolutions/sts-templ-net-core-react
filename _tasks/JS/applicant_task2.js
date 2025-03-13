//Berechne die Fakultät einer Zahl (Beispiel: 5! = 1 * 2 * 3 * 4 * 5)
//Calculate the factorial of a number (Example: 5! = 1 * 2 * 3 * 4 * 5)

function calcuateFaculty(n) {
  if (n === 0) {
    return 1;
  }
  return n * calcuateFaculty(n - 1);
}

console.log(calcuateFaculty(5)); // 120
