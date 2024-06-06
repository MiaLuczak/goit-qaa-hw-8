// === Task 3 ===

// JSON data string
const jsonData = '{"info": Invalid JSON String}';

// try...catch construction
try {
  // Code that will 'try' to be executed
  JSON.parse(jsonData);
} catch (error) {
  // Code that will be executed if try part throws an error
  console.error(error.name);
  console.error(error.message);
}

// Arrow function that shows the code is still executed after an error in try...catch
const message = () => 'Message is still executed';
// console.log's for spacing and displaying message function
console.log('');
console.log(message());

// Running in Node.js
