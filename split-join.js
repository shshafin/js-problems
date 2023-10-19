const string =
  "    My name is shafin. i am a student. i love my family & Allah  ";
// split = vag kore
let space = string.split(" ");
let dot = string.split(".");
let char = string.split("");
// console.log(char);

// slice = specific part cut kore
let cut = string.slice(11, 17);
// console.log(cut);

// at/charAt = charecter er part cut kore
let result = string.at(-2);
// console.log(result);

// substring = same of slice
// console.log(string.substring(11, 17));

// trim = front space and back space cut kore
// console.log(string.trim());
// console.log(string);

// console.log(string.trimStart());
// console.log(string.trimEnd());

// join

// const array = [
//   "I am a MERN stack developer",
//   "I want to be a software hunter",
//   "Love to do it",
// ];

// console.log(array.join(". "));

const no = ["Shafin is a good boy", "Shaila is a good girl"];

console.log(no.join(". "));
