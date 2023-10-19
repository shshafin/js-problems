// function findWordReverse(text) {
//   let cut = myString.split(" ");
//   reversed = "";
//   for (let i = cut.length - 1; i >= 0; i--) {
//     const element = cut[i];
//     reversed = reversed + " " + element;
//     console.log(element);
//   }
//   return reversed.trimStart();
// }

// const myString = "i am a good boy";

// console.log(findWordReverse(myString));

// function findWordReverse(text) {
//   let cut = myString.split(" ");
//   let array = [];
//   for (let i = cut.length - 1; i >= 0; i--) {
//     const element = cut[i];
//     array.push(element);
//   }
//   const result = array.join(" ");
//   return result;
// }

// const myString = "i am a good boy";
// console.log(findWordReverse(myString));

// function findWordReverse(text) {
//   let cut = text.split(" ");
//   let array = [];
//   for (let i = cut.length - 1; i >= 0; i--) {
//     const element = cut[i];
//     array.push(element);
//   }
//   let add = array.join(" ");
//   return add;
// }

// const myString = "i am a good boy";
// console.log(findWordReverse(myString));

// function findWordReverse(text) {
//   reversed = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     const element = text[i];
//     reversed = reversed + element;
//   }
//   return reversed;
// }

// const myString = "i am a good boy";
// console.log(findWordReverse(myString));

// function findWordReverse(text) {
//   let cut = text.split("");
//   let array = [];
//   for (let i = cut.length - 1; i >= 0; i--) {
//     const element = cut[i];
//     array.push(element);
//   }
//   const result = array.join("");
//   return result;
// }

function findWordReverse(text) {
  let cut = text.split("");
  reversed = "";
  for (let i = cut.length - 1; i >= 0; i--) {
    const element = cut[i];
    reversed = reversed + element;
  }
  return reversed;
}

const myString = "i am a good boy";

console.log(findWordReverse(myString));
