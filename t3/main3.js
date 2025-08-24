// 1. Define an empty array to store user inputs
let numbers = [];

// 2. Keep prompting until user enters 'done'
while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");

  if (input === null || input.toLowerCase() === "done") {
    break; // Exit loop
  }

  let num = parseInt(input, 10);

  // Only store valid numbers
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

// 3. Prepare output for even numbers
let output = "Even Numbers: ";
let evenNumbers = [];

// 4. Iterate using for...of
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// 5. Display results on the HTML page
if (evenNumbers.length > 0) {
  document.getElementById("output").innerText = output + evenNumbers.join(", ");
} else {
  document.getElementById("output").innerText = output + "None";
}

// 6. Add end of program message
document.body.innerHTML += "<p>End of Program.</p>";
