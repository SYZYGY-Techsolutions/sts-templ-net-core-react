//Prüfe ob ein Wort ein Palindrom ist (Beispiel: Otto, Lagerregal)
//Check if a word is a palindrome (Example: racecar, noon)

function isPalindrome(word: string): boolean {
  const reversedWord = word.split("").reverse().join("");
  return word.toLowerCase() === reversedWord.toLowerCase();
}

console.log(isPalindrome("Otto")); // true
console.log(isPalindrome("Lagerregal")); // true
console.log(isPalindrome("asdqwe")); // false
