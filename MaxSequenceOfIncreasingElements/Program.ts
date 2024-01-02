class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for the array of integers
        console.log("Enter the array of integers (space separated):");
        let arr: number[] = prompt("").split(" ").map(Number); // Use prompt for user input in a browser environment

        // Find the longest increasing subsequence
        let longestIncreasingSubsequence: number[] = this.findLongestIncreasingSubsequence(arr);

        // Display the longest increasing subsequence
        console.log("Longest increasing subsequence:");
        for (let num of longestIncreasingSubsequence) {
            console.log(num);
        }
    }

    // Function to find the longest increasing subsequence
    static findLongestIncreasingSubsequence(arr: number[]): number[] {
        let n: number = arr.length;
        let lengths: number[] = new Array(n); // To store lengths of longest increasing subsequences
        let previousIndices: number[] = new Array(n); // To store indices of previous elements in the subsequences

        let maxLength: number = 0; // Length of the longest increasing subsequence
        let lastIndex: number = 0; // Index of the last element in the longest increasing subsequence

        // Iterate through each element in the array
        for (let i = 0; i < n; i++) {
            // Initialize length and previous index for the current element
            lengths[i] = 1;
            previousIndices[i] = -1;

            // Compare the current element with previous elements
            for (let j = 0; j < i; j++) {
                // If the current element is greater and forms a longer subsequence, update information
                if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
                    lengths[i] = lengths[j] + 1;
                    previousIndices[i] = j;
                }
            }

            // Update the information for the longest increasing subsequence
            if (lengths[i] > maxLength) {
                maxLength = lengths[i];
                lastIndex = i;
            }
        }

        // Reconstruct the longest increasing subsequence
        let longestIncreasingSubsequence: number[] = [];
        while (lastIndex >= 0) {
            longestIncreasingSubsequence.unshift(arr[lastIndex]);
            lastIndex = previousIndices[lastIndex];
        }

        return longestIncreasingSubsequence;
    }
}

// Call the main method to start the program
Program.main();
