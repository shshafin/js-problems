// function findTallest(number) {
//   if (!Array.isArray(number)) {
//     return "please provide an array";
//   }
//   let largest = number[0];

//   for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }

// const array = [128, 130, 145, 165, 187, 199];
// const tallest = findTallest(array);
// console.log(tallest);

function findLowest(number) {
  if (!Array.isArray(number)) {
    return "please provide an array";
  }

  let lowest = number[0];

  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const array = [128, 130, 145, 165, 187, 199];
const lowest = findLowest(array);
console.log(lowest);
