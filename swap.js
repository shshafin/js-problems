let first = 28;
let second = 29;
// this is wrong approach
// first = second;
// second = first;

// approach : 1
// const fixed = first;
// first = second;
// second = fixed;

// approach : 2 --- destructuring
// [first, second] = [second, first];

// approach : 3
first = first + second; 
second = first - second; 
first = first - second; 
console.log(first, second);
