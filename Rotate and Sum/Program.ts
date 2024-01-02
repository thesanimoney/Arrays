class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for the array of integers
        console.log("Enter the array of integers (space separated):");
        let array: number[] = Array.from(prompt("").split(" "), Number); // Use prompt for user input in a browser environment

        // Prompt user for the number of right rotations (k)
        console.log("Enter the number of right rotations (k):");
        let k: number = parseInt(prompt("")); // Use prompt for user input in a browser environment

        // Initialize the sum array
        let sumArray: number[] = new Array(array.length).fill(0);

        // Perform right rotations and update the sum array
        for (let i = 0; i < k; i++) {
            rotateRight(array); // Rotate the array to the right
            sumArrays(sumArray, array); // Sum the arrays and store the result in sumArray
        }

        // Print the sum after each rotation
        console.log("Sum after each rotation:");
        console.log(sumArray.join(" "));
    }

    // Function to rotate an array to the right
    static rotateRight(arr: number[]): void {
        let temp: number = arr[arr.length - 1];

        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }

        arr[0] = temp;
    }

    // Function to sum two arrays element-wise
    static sumArrays(result: number[], arr: number[]): void {
        for (let i = 0; i < result.length; i++) {
            result[i] += arr[i];
        }
    }
}

// Call the main method to start the program
Program.main();
