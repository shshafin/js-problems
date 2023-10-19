// const fibonacci = [0, 1];

// for (let i = 2; i <= 10; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   //   console.log(fibonacci);
// }

function findPositive(number) {
  let value = [];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element >= 0) {
      value.push(element);
      continue;
    }
  }
  return value;
}

const array = [1, 2, 3, 4, -5, 6, 7];
console.log(findPositive(array));
