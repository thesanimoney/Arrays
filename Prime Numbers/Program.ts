class Program {
    // The main entry point of the program
    static main(): void {
        // Prompt user for the value of n
        console.log("Enter the value of n:");
        let n: number = parseInt(prompt("")); // Use prompt for user input in a browser environment

        // Create an array to store whether each number is prime or not
        let primes: boolean[] = new Array(n + 1);

        // Step 1: Initialize all elements in the primes array to true
        for (let i = 2; i <= n; i++) {
            primes[i] = true;
        }

        // Step 2: Set primes[0] and primes[1] to false since 0 and 1 are not prime
        primes[0] = primes[1] = false;

        // Step 3 and 4: Find and mark multiples of primes as false
        for (let p = 2; p * p <= n; p++) {
            if (primes[p]) {
                for (let i = p * p; i <= n; i += p) {
                    primes[i] = false;
                }
            }
        }

        // Print prime numbers
        console.log("Prime numbers in the range [1...n]:");
        for (let i = 2; i <= n; i++) {
            if (primes[i]) {
                console.log(i);
            }
        }
    }
}

// Call the main method to start the program
Program.main();
