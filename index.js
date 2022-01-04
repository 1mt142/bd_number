/**
 * @param {String} banglaNumber
 * @return {String}
 */

function bnToEnNum(banglaNumber = "") {
  if (typeof banglaNumber !== "string") {
    throw {
      message: `${banglaNumber} must be string and Bangla number`,
    };
  }
  String.prototype.gValue = function () {
    const enumStore = {
      "০": "0",
      "১": "1",
      "২": "2",
      "৩": "3",
      "৪": "4",
      "৫": "5",
      "৬": "6",
      "৭": "7",
      "৮": "8",
      "৯": "9",
    };
    let gx = this;
    for (let x in enumStore) {
      gx = gx.replace(new RegExp(x, "g"), enumStore[x]);
    }
    return gx;
  };
  return banglaNumber.gValue();
}

/**
 * @param {Number} englishNumber
 * @return {String}
 */

function enToBnNum(englishNumber = "") {
  if (typeof englishNumber === "number") {
    throw {
      message: `${englishNumber} must be number`,
    };
  }
  String.prototype.gValue = function () {
    const bNumStore = {
      "0": "০",
      "1": "১",
      "2": "২",
      "3": "৩",
      "4": "৪",
      "5": "৫",
      "6": "৬",
      "7": "৭",
      "8": "৮",
      "9": "৯",
    };
    let gx = this;
    for (let x in bNumStore) {
      gx = gx.replace(new RegExp(x, "g"), bNumStore[x]);
    }
    return gx;
  };
  return englishNumber.gValue();
}
module.exports = { bnToEnNum, enToBnNum };
