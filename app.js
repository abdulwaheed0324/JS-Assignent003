// // Task Number01
// let CityName = prompt("Enter Your City Nmae", );

// if (CityName){
//     document.write("Welcome to the city of light");
// }

// // Task Number02
// let gender = prompt("Enter your gender please");
// let a = "male";
// let b = "female";

// if(gender === a){
//     alert("hello Sir,");
// }else if(gender === b){
//     alert("hello Mam");
//     }else{
//     alert("enter gender");
// }


// Chapter Number 12 to 13)

// // Question Number01
// // Get input from the user
// const char = prompt("Enter a single character:");

// if (char.length !== 1) {
//   alert("Please enter only a single character.");
// } else {
//   const asciiCode = char.charCodeAt(0);

//   if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("The character is a number.");
//   } else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("The character is an uppercase letter.");
//   } else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("The character is a lowercase letter.");
//   } else {
//     alert("The character is neither a number, uppercase letter, nor lowercase letter.");
//   }
// }

// // Question Number02
// // Get two integers from the user
// const num1 = (prompt("Enter the first integer:"));
// const num2 = (prompt("Enter the second integer:"));

// // Compare the integers and display the result
// if (num1 > num2) {
//   alert("The larger number is": ${num1});
// }
//  else if (num1 < num2) {
//   alert("The larger number is: ${num2})
// } 
// else {
//   alert("The two numbers are equal.");
// }

// // Question Number03

// // Get a number from the user
// const num = (prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (num > 0) {
//   alert("The number is positive.");
// } else if (num < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }

// // Question Number04
// // Get a character from the user
// const char = prompt("Enter a single character:");

// // Check if the input is a single character
// if (char.length !== 1) {
//   alert("Please enter only a single character.");
// } else {
//   // Check if the character is a vowel
//   const vowels = "aeiouAEIOU"; // List of vowels
//   if (vowels.includes(char)) {
//     alert("True: The character is a vowel.");
//   } else {
//     alert("False: The character is not a vowel.");
//   }
// }

// // Question Number05

// // a. Store the correct password in a variable
// const correctPassword = "mySecurePassword";

// // b. Ask the user to enter their password
// const userPassword = prompt("Enter your password:");

// // c. Validate the two passwords
// if (!userPassword) {
//   // i. Check if the user has entered a password
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   // ii. Check if both passwords are the same
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }

// // Question Number06

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting); // Displays "Good day"

// // Qusetion Number 07
// // Take time input from the user in 24-hour format
// const time = prompt("Enter time in 24-hour format (e.g., 1900 for 7:00 PM):");

// // Convert input to a number (assuming user enters a valid 4-digit time)
// const hour = parseInt(time.slice(0, 2)); // Get the hour part (first two digits)

// // Check the time and display appropriate message
// if (hour >= 0 && hour < 12) {
//   alert("Good Morning!"); // Time between 00:00 and 11:59
// } else if (hour >= 12 && hour < 18) {
//   alert("Good Afternoon!"); // Time between 12:00 and 17:59
// } else if (hour >= 18 && hour < 21) {
//   alert("Good Evening!"); // Time between 18:00 and 20:59
// } else if (hour >= 21 && hour < 24) {
//   alert("Good Night!"); // Time between 21:00 and 23:59
// } else {
//   alert("Invalid time! Please enter a valid 24-hour time format.");
//  }