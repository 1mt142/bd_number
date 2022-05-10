/* eslint-disable eqeqeq */

const a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
const b = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

const getLT20 = (n) => a[Number(n)];
const getGT20 = (n) => b[n[0]] + " " + a[n[1]];

function numWords(input) {
  const num = Number(input);
  if (isNaN(num)) return "";
  if (num === 0) return "zero";

  const numStr = num.toString();
  if (numStr.length > 9) {
    throw new Error("overflow"); // Does not support converting more than 9 digits yet
  }

  const [, n1, n2, n3, n4, n5] = ("000000000" + numStr).substr(-9).match(regex); // left pad zeros

  let str = "";
  str += n1 != 0 ? (getLT20(n1) || getGT20(n1)) + "crore " : "";
  str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) + "lakh " : "";
  str += n3 != 0 ? (getLT20(n3) || getGT20(n3)) + "thousand " : "";
  str += n4 != 0 ? getLT20(n4) + "hundred " : "";
  str += n5 != 0 && str != "" ? "" : "";
  str += n5 != 0 ? getLT20(n5) || getGT20(n5) : "";

  return str.trim();
}

const uppercaseWords = (str) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

/**
 * @param {Number} Number
 * @return {String} String
 */
function numToBDTWord(data = 0) {
  const floatData = parseFloat(data).toFixed(2);
  const arrData = floatData.toString().split(".", 2);
  const taka = numWords(parseInt(arrData[0]));
  const paisa = numWords(parseInt(arrData[1]));
  const output = `${taka} taka and ${paisa} paisa`;
  return uppercaseWords(output);
}

module.exports = { numToBDTWord };
