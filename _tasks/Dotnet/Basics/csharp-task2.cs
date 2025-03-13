//Berechne die Fakultät einer Zahl (Beispiel: 5! = 1 * 2 * 3 * 4 * 5)
//Calculate the factorial of a number (Example: 5! = 1 * 2 * 3 * 4 * 5)

public static class MathHelper
{
    public static int Factorial(int number)
    {
        if (number < 0)
        {
            throw new ArgumentException("Number must be greater than or equal to 0");
        }
        if (number == 0)
        {
            return 1;
        }
        return number * Factorial(number - 1);
    }
}
