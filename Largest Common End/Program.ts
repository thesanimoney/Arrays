using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first array of words:");
        string[] arr1 = Console.ReadLine().Split();

        Console.WriteLine("Enter the second array of words:");
        string[] arr2 = Console.ReadLine().Split();

        var result = FindLargestCommonEnd(arr1, arr2);

        if (result.Item1 > 0)
        {
            Console.WriteLine($"The largest common end is at the {result.Item3}: {string.Join(" ", result.Item2)}");
        }
        else
        {
            Console.WriteLine("No common words at the left and right");
        }
    }

    static Tuple<int, string[], string> FindLargestCommonEnd(string[] arr1, string[] arr2)
    {
        int leftCommonEnd = 0;
        int rightCommonEnd = 0;

        int minLength = Math.Min(arr1.Length, arr2.Length);

        // Scan from left to right
        for (int i = 0; i < minLength; i++)
        {
            if (arr1[i] == arr2[i])
            {
                leftCommonEnd++;
            }
            else
            {
                break;
            }
        }

        // Scan from right to left
        for (int i = 1; i <= minLength; i++)
        {
            if (arr1[arr1.Length - i] == arr2[arr2.Length - i])
            {
                rightCommonEnd++;
            }
            else
            {
                break;
            }
        }

        if (leftCommonEnd >= rightCommonEnd)
        {
            string[] commonEnd = arr1.Take(leftCommonEnd).ToArray();
            return new Tuple<int, string[], string>(leftCommonEnd, commonEnd, "left");
        }
        else
        {
            string[] commonEnd = arr1.Skip(arr1.Length - rightCommonEnd).ToArray();
            return new Tuple<int, string[], string>(rightCommonEnd, commonEnd, "right");
        }
    }
}
