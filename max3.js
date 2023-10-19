// const jim = 90;
// const dela = 87;
// const chinku = 90;

// if (jim > dela && jim > chinku) {
//   console.log("jim");
// } else if (dela > jim && dela > chinku) {
//   console.log("dela");
// } else {
//   console.log("chinku");
// }

// function findMaxNumber() {
//   if (28 > 29 && 28 > 27) {
//     return 28;
//   } else if (29 > 28 && 29 > 27) {
//     return 29;
//   } else {
//     return 27;
//   }
// }

// console.log(findMaxNumber());

// function findMaxNumber() {
//   return Math.max(28, 29, 27);
// }

// console.log(findMaxNumber());

// function findMinNumber(a, b, c) {
//   if (a < b && a < c) {
//     return "a";
//   } else if (b < a && b < c) {
//     return "b";
//   } else {
//     return "c";
//   }
// }
// console.log(findMinNumber(28, 29, 27));

function findMinNumber(a, b, c) {
  return Math.min(a,b,c);
}

console.log(findMinNumber( 28,  29,  27));
