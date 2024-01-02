class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for a sequence of numbers
        console.log("Enter a sequence of numbers (space separated):");
        let numbers: number[] = prompt("").split(" ").map(Number); // Use prompt for user input in a browser environment

        // Create a frequency map to store the count of each number
        let frequencyMap: Map<number, number> = new Map();

        // Iterate through each number in the sequence
        for (let num of numbers) {
            // Update the frequency map
            if (frequencyMap.has(num)) {
                frequencyMap.set(num, frequencyMap.get(num)! + 1);
            } else {
                frequencyMap.set(num, 1);
            }
        }

        // Find the most frequent number and its frequency
        let mostFrequentNumber: number = Array.from(frequencyMap.entries())
            .sort((a, b) => b[1] - a[1] || numbers.indexOf(a[0]) - numbers.indexOf(b[0]))[0][0];

        let maxFrequency: number = frequencyMap.get(mostFrequentNumber)!;

        // Display the result
        console.log(`The most frequent number is ${mostFrequentNumber} (occurs ${maxFrequency} times).`);
    }
}

// Call the main method to start the program
Program.main();
