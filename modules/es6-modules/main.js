import { Child } from "./child.js";
import { displayUser, age } from "./utils.js";
// const {displayUser} = require("./utils.js");
// import = "const"
// from = "= require"

// const user = {
//   firstName: "arslonbek",
//   age: 20,
//   job: "teacher",
// };

// displayUser(user);

// console.log(`age = ${age}`);

const child = new Child("arslonbek", 20, "Shuxratbek", 56);
console.log("child = ", child);
child.displayDataChild();
child.displayDataFather();
