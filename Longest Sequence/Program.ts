class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for the array of integers
        console.log("Enter the array of integers (space separated):");
        let arr: number[] = prompt("").split(" ").map(Number); // Use prompt for user input in a browser environment

        // Initialize variables to track the longest sequence
        let longestSequenceLength: number = 0;
        let currentElement: number = arr[0];
        let currentSequenceLength: number = 1;
        let longestSequenceStartIndex: number = 0;
        let currentSequenceStartIndex: number = 0;

        // Iterate through the array to find the longest sequence
        for (let i = 1; i < arr.length; i++) {
            // Check if the current element is the same as the previous one
            if (arr[i] === currentElement) {
                // If yes, increment the current sequence length
                currentSequenceLength++;
            } else {
                // If no, check if the current sequence is longer than the longest
                if (currentSequenceLength > longestSequenceLength) {
                    // Update the longest sequence information
                    longestSequenceLength = currentSequenceLength;
                    longestSequenceStartIndex = currentSequenceStartIndex;
                }

                // Reset variables for the new sequence
                currentElement = arr[i];
                currentSequenceLength = 1;
                currentSequenceStartIndex = i;
            }
        }

        // Check for the longest sequence at the end of the array
        if (currentSequenceLength > longestSequenceLength) {
            longestSequenceLength = currentSequenceLength;
            longestSequenceStartIndex = currentSequenceStartIndex;
        }

        // Display the longest sequence of equal elements
        console.log("Longest sequence of equal elements:");
        for (let i = longestSequenceStartIndex; i < longestSequenceStartIndex + longestSequenceLength; i++) {
            console.log(arr[i]);
        }
    }
}

// Call the main method to start the program
Program.main();
