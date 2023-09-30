using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the value of n:");
        int n = int.Parse(Console.ReadLine());

        bool[] primes = new bool[n + 1];

        // Step 1: Initialize all elements in the primes array to true
        for (int i = 2; i <= n; i++)
        {
            primes[i] = true;
        }

        // Step 2: Set primes[0] and primes[1] to false since 0 and 1 are not prime
        primes[0] = primes[1] = false;

        // Step 3 and 4: Find and mark multiples of primes as false
        for (int p = 2; p * p <= n; p++)
        {
            if (primes[p])
            {
                for (int i = p * p; i <= n; i += p)
                {
                    primes[i] = false;
                }
            }
        }

        // Print prime numbers
        Console.WriteLine("Prime numbers in the range [1...n]:");
        for (int i = 2; i <= n; i++)
        {
            if (primes[i])
            {
                Console.Write(i + " ");
            }
        }
    }
}