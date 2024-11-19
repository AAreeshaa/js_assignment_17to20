// //Question1:
// let array = [[]];



// //Question2:
// let arraymatrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// console.log(arraymatrix);



// //Question3:
// for (let k = 1; k <= 10; k++) {
//     console.log(k);
// }


// //Question4:
// let tableNumber = Number(prompt("Enter a number to show its Multiplication: "));
// let tableLength = Number(prompt("Enter the length of the table: "));

// for (let i = 1; i <= tableLength; i++) {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br/>`);
// }


// //Question5:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let k = 0; k < fruits.length; k++) {
//     document.write(`${fruits[k]}<br/>`);
// }
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`Element at index is ${[i]} ${fruits[i]} <br/>`);
// }



// //Question6: 
// // a. Counting
// document.write("Counting: ");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + (i < 15 ? ", " : ""));
// }

// // b. Reverse counting
// document.write(`<br/>Reverse counting: `);
// for (let i = 10; i >= 1; i--) {
//     document.write(i + (i > 1 ? ", " : ""));
// }

// // c. Even numbers
// document.write(`<br/>Even: `);
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + (i < 20 ? ", " : ""));
// }

// // d. Odd numbers
// document.write(`<br/>Odd: `);
// for (let i = 1; i < 20; i += 2) {
//     document.write(i + (i < 19 ? ", " : ""));
// }

// // e. Series
// document.write(`<br/>Series: `);
// for (let i = 1; i <= 20; i++) {
//     document.write((i * 2) + "k" + (i < 20 ? ", " : ""));
// }



// //Question7:
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// let index = bakeryItems.indexOf(userInput);

// if (index !== -1) {
//     alert(`${userInput} is available at index ${index} in our bakery.`);}
// else {
//     alert(`We are sorry. ${userInput} is not available in our bakery.`);}



// //Question8: 
// let a = [24, 53, 78, 91, 12];
// let largest = Math.max(...a);

// document.write(`Array items:  ${a}<br/> `);
// document.write(`The largest number is:  ${largest} `);



// //Question9:
// let b = [24, 53, 78, 91, 12];
// let smallest = Math.min(...b);

// document.write(`Array items:  ${b}<br/> `);
// document.write(`The Smallest number is:  ${smallest} `);



// //Question10: 
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }