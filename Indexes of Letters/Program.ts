class Program {
    static main(): void {
        // Create an array containing all letters from 'a' to 'z'
        let letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

        // Read a lowercase word from the console
        console.log("Enter a lowercase word:");
        let word: string = prompt("").trim(); // Use prompt for user input in a browser environment

        // Print the index of each letter in the letters array
        console.log("Letter Indices:");
        for (let letter of word) {
            let index: number = letters.indexOf(letter);
            if (index !== -1) {
                console.log(`${letter}: ${index}`);
            }
        }
    }
}

// Call the main method to start the program
Program.main();
