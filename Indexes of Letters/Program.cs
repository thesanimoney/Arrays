using System;

class Program
{
    static void Main()
    {
        // Create an array containing all letters from 'a' to 'z'
        char[] letters = new char[26];
        for (int i = 0; i < 26; i++)
        {
            letters[i] = (char)('a' + i);
        }

        // Read a lowercase word from the console
        Console.WriteLine("Enter a lowercase word:");
        string word = Console.ReadLine();

        // Print the index of each letter in the letters array
        Console.WriteLine("Letter Indices:");
        foreach (char letter in word)
        {
            int index = Array.IndexOf(letters, letter);
            if (index != -1)
            {
                Console.WriteLine($"{letter}: {index}");
            }
        }
    }
}
