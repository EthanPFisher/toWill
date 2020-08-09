var disemvowel = function(str) {
  if (typeof str === "number") {
    // return String(str);
    throw new Error("Input is not a string")
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;
