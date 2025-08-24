// 1. Create an array called fruits and initialize it
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// 2. Display the contents of the fruits array
console.log("Fruits:", fruits);

// 3. Calculate and display the length of the fruits array
console.log("Length of Fruits:", fruits.length);

// 4. Access and display the element at index 2
console.log("Element at Index 2:", fruits[2]);

// 5. Access and display the last element using length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// 6. Create an empty array called vegetables
let vegetables = [];

// 7. Prompt user to enter three vegetables and add them using push()
for (let i = 0; i < 3; i++) {
  let veg = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(veg);
}

// 8. Display the contents of the vegetables array
console.log("Vegetables:", vegetables);

// 9. Calculate and display the length of the vegetables array
console.log("Length of Vegetables:", vegetables.length);
