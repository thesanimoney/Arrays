using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the array of integers (space separated):");
        int[] arr = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);

        int longestSequenceLength = 0;
        int currentElement = arr[0];
        int currentSequenceLength = 1;
        int longestSequenceStartIndex = 0;
        int currentSequenceStartIndex = 0;

        for (int i = 1; i < arr.Length; i++)
        {
            if (arr[i] == currentElement)
            {
                currentSequenceLength++;
            }
            else
            {
                if (currentSequenceLength > longestSequenceLength)
                {
                    longestSequenceLength = currentSequenceLength;
                    longestSequenceStartIndex = currentSequenceStartIndex;
                }

                currentElement = arr[i];
                currentSequenceLength = 1;
                currentSequenceStartIndex = i;
            }
        }

        // Check for the longest sequence at the end of the array
        if (currentSequenceLength > longestSequenceLength)
        {
            longestSequenceLength = currentSequenceLength;
            longestSequenceStartIndex = currentSequenceStartIndex;
        }

        Console.WriteLine("Longest sequence of equal elements:");
        for (int i = longestSequenceStartIndex; i < longestSequenceStartIndex + longestSequenceLength; i++)
        {
            Console.Write(arr[i] + " ");
        }
    }
}
