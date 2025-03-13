// Schreibe eine Funktion, die die zweitgrößte Zahl innerhalb eines Arrays zurückgibt
// Write a function which return the second largest number within an array

public static class ArrayHelper
{
    public static int GetSecondLargestNumber(int[] numbers)
    {
        if (numbers.Length < 2)
        {
            throw new ArgumentException("Array must contain at least 2 elements");
        }
        // sort the array in descending order and return the second element
        return numbers.OrderByDescending(x => x).Skip(1).First();
    }
}
