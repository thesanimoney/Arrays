using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the array of integers (space separated):");
        int[] arr = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);

        List<int> longestIncreasingSubsequence = FindLongestIncreasingSubsequence(arr);

        Console.WriteLine("Longest increasing subsequence:");
        foreach (int num in longestIncreasingSubsequence)
        {
            Console.Write(num + " ");
        }
    }

    static List<int> FindLongestIncreasingSubsequence(int[] arr)
    {
        int n = arr.Length;
        int[] lengths = new int[n];
        int[] previousIndices = new int[n];

        int maxLength = 0;
        int lastIndex = 0;

        for (int i = 0; i < n; i++)
        {
            lengths[i] = 1;
            previousIndices[i] = -1;

            for (int j = 0; j < i; j++)
            {
                if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1)
                {
                    lengths[i] = lengths[j] + 1;
                    previousIndices[i] = j;
                }
            }

            if (lengths[i] > maxLength)
            {
                maxLength = lengths[i];
                lastIndex = i;
            }
        }

        List<int> longestIncreasingSubsequence = new List<int>();
        while (lastIndex >= 0)
        {
            longestIncreasingSubsequence.Insert(0, arr[lastIndex]);
            lastIndex = previousIndices[lastIndex];
        }

        return longestIncreasingSubsequence;
    }
}
