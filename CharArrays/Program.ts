class Program {
    static main(): void {
        // Prompt user for the first character array input
        console.log("Enter the first char array:");
        let array1: string[] = Array.from(prompt("").trim()); // Use prompt for user input in a browser environment

        // Prompt user for the second character array input
        console.log("Enter the second char array:");
        let array2: string[] = Array.from(prompt("").trim());

        // Determine the minimum length between the two arrays
        let minLength: number = Math.min(array1.length, array2.length);
        let arraysEqual: boolean = true; // Flag to track if arrays are equal

        // Display header for the output
        console.log("Alphabetical order:");

        // Compare corresponding characters in both arrays
        for (let i = 0; i < minLength; i++) {
            if (array1[i] < array2[i]) {
                // If current character in array1 is smaller, display array1 first
                console.log(array1.join(''));
                console.log(array2.join(''));
                arraysEqual = false;
                break;
            } else if (array1[i] > array2[i]) {
                // If current character in array2 is smaller, display array2 first
                console.log(array2.join(''));
                console.log(array1.join(''));
                arraysEqual = false;
                break;
            }
        }

        // Display remaining characters in the longer array
        if (arraysEqual && array1.length < array2.length) {
            console.log(array1.join(''));
            console.log(array2.join(''));
        } else if (arraysEqual && array1.length > array2.length) {
            console.log(array2.join(''));
            console.log(array1.join(''));
        } else if (arraysEqual) {
            // Arrays are completely equal
            console.log(array1.join(''));
        }
    }
}

// Call the main method to start the program
Program.main();
