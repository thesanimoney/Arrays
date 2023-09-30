using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the array of integers (space separated):");
        int[] array = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);

        Console.WriteLine("Enter the number of right rotations (k):");
        int k = int.Parse(Console.ReadLine());

        int[] sumArray = new int[array.Length]; // Initialize the sum array

        for (int i = 0; i < k; i++)
        {
            RotateRight(array); // Rotate the array to the right
            SumArrays(sumArray, array); // Sum the arrays and store the result in sumArray
        }

        Console.WriteLine("Sum after each rotation:");
        foreach (var num in sumArray)
        {
            Console.Write(num + " ");
        }
    }

    // Function to rotate an array to the right
    static void RotateRight(int[] arr)
    {
        int temp = arr[arr.Length - 1];

        for (int i = arr.Length - 1; i > 0; i--)
        {
            arr[i] = arr[i - 1];
        }

        arr[0] = temp;
    }

    // Function to sum two arrays element-wise
    static void SumArrays(int[] result, int[] arr)
    {
        for (int i = 0; i < result.Length; i++)
        {
            result[i] += arr[i];
        }
    }
}
