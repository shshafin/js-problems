// const name = "shafin";
// const na = "shaFIN";
// // console.log(na.toLocaleUpperCase());
// // console.log(na.toUpperCase());
// // console.log(name.toUpperCase());
// if (name.toLowerCase() === na.toLowerCase()) {
//   console.log("valid");
// } else {
//   console.log("invalid");
// }

const fullName = "Md sadnan Hossen Shafin";

// const findName = "shAfin";
// console.log(fullName.includes(findName));

// const fullNameLower = fullName.toLowerCase();
// const findNameLower = findName.toLowerCase();
// const doesExist = fullNameLower.includes(findNameLower);
// console.log(doesExist);

// const doesExist = fullName.toLowerCase().includes(findName.toLowerCase());
// console.log(doesExist);

// console.log(fullName.indexOf("sadnan"));

if (fullName.indexOf("Md") !== -1) {
  console.log("valid");
} else {
  console.log("invalid");
}

console.log(fullName.startsWith("Md"));
console.log(fullName.toLowerCase().endsWith("shafin"));
