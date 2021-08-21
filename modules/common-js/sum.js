function sum(...args) {
  return args.reduce((a, c) => a + c);
}

function pow(number, degree) {
  return number ** degree;
}

module.exports.sum = sum;
module.exports.pow = pow;
