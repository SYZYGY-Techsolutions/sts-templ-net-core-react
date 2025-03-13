//Prüfe ob ein Wort ein Palindrom ist (Beispiel: Otto, Lagerregal)
//Check if a word is a palindrome (Example: racecar, noon)

public static class StringHelper
{
    public static bool IsPalindrome(string word)
    {
        if (string.IsNullOrEmpty(word))
        {
            return false;
        }
        // check if the word is a palindrome and use a string reverse method
        return word.ToLower() == new string(word.ToLower().Reverse().ToArray());
    }
}
