using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first char array:");
        char[] array1 = Console.ReadLine().ToCharArray();

        Console.WriteLine("Enter the second char array:");
        char[] array2 = Console.ReadLine().ToCharArray();

        int minLength = Math.Min(array1.Length, array2.Length);
        bool arraysEqual = true;

        Console.WriteLine("Alphabetical order:");

        for (int i = 0; i < minLength; i++)
        {
            if (array1[i] < array2[i])
            {
                Console.WriteLine(array1);
                Console.WriteLine(array2);
                arraysEqual = false;
                break;
            }
            else if (array1[i] > array2[i])
            {
                Console.WriteLine(array2);
                Console.WriteLine(array1);
                arraysEqual = false;
                break;
            }
        }

        if (arraysEqual && array1.Length < array2.Length)
        {
            Console.WriteLine(array1);
            Console.WriteLine(array2);
        }
        else if (arraysEqual && array1.Length > array2.Length)
        {
            Console.WriteLine(array2);
            Console.WriteLine(array1);
        }
        else if (arraysEqual)
        {
            Console.WriteLine(array1);
        }
    }
}
