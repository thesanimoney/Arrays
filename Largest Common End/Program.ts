class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for the first array of words
        console.log("Enter the first array of words:");
        let arr1: string[] = prompt("").split(" "); // Use prompt for user input in a browser environment

        // Prompt user for the second array of words
        console.log("Enter the second array of words:");
        let arr2: string[] = prompt("").split(" ");

        // Call the function to find the largest common end
        let result: [number, string[], string] = this.findLargestCommonEnd(arr1, arr2);

        // Display the result
        if (result[0] > 0) {
            console.log(`The largest common end is at the ${result[2]}: ${result[1].join(" ")}`);
        } else {
            console.log("No common words at the left and right");
        }
    }

    // Function to find the largest common end between two arrays of words
    static findLargestCommonEnd(arr1: string[], arr2: string[]): [number, string[], string] {
        let leftCommonEnd: number = 0;
        let rightCommonEnd: number = 0;

        let minLength: number = Math.min(arr1.length, arr2.length);

        // Scan from left to right
        for (let i = 0; i < minLength; i++) {
            if (arr1[i] === arr2[i]) {
                leftCommonEnd++;
            } else {
                break;
            }
        }

        // Scan from right to left
        for (let i = 1; i <= minLength; i++) {
            if (arr1[arr1.length - i] === arr2[arr2.length - i]) {
                rightCommonEnd++;
            } else {
                break;
            }
        }

        // Determine the larger common end and its position
        if (leftCommonEnd >= rightCommonEnd) {
            let commonEnd: string[] = arr1.slice(0, leftCommonEnd);
            return [leftCommonEnd, commonEnd, "left"];
        } else {
            let commonEnd: string[] = arr1.slice(arr1.length - rightCommonEnd);
            return [rightCommonEnd, commonEnd, "right"];
        }
    }
}

// Call the main method to start the program
Program.main();
