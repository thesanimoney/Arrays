using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a sequence of numbers (space separated):");
        int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

        Dictionary<int, int> frequencyMap = new Dictionary<int, int>();

        foreach (int num in numbers)
        {
            if (frequencyMap.ContainsKey(num))
            {
                frequencyMap[num]++;
            }
            else
            {
                frequencyMap[num] = 1;
            }
        }

        int mostFrequentNumber = frequencyMap
            .OrderByDescending(pair => pair.Value)
            .ThenBy(pair => Array.IndexOf(numbers, pair.Key))
            .First().Key;

        int maxFrequency = frequencyMap[mostFrequentNumber];

        Console.WriteLine($"The most frequent number is {mostFrequentNumber} (occurs {maxFrequency} times).");
    }
}
