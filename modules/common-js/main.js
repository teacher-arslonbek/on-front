const utils = require("./sum");
const { sum, pow } = utils;
const summa = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`summa = ${summa}`);

const powered = pow(10, 3);
console.log(`powered = ${powered}`);
