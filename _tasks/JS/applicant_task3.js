//Prüfe ob ein Wort ein Palindrom ist (Beispiel: Otto, Lagerregal)
//Check if a word is a palindrome (Example: racecar, noon)

function checkForPalindrome(word) {
  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

console.log(checkForPalindrome("Otto")); // true
console.log(checkForPalindrome("Lagerregal")); // true
console.log(checkForPalindrome("asdqwe")); // false
