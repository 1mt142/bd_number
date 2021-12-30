/**
 * @param {String} banglaNumber
 * @return {number}
 */

function bnToEnNum(banglaNumber = "") {
  if (typeof banglaNumber !== "string") {
    throw {
      message: `${banglaNumber} must be string and Bangla number`,
    };
  }
  String.prototype.gValue = function () {
    const numStore = {
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
    for (let x in numStore) {
      gx = gx.replace(new RegExp(x, "g"), numStore[x]);
    }
    return gx;
  };
  return banglaNumber.gValue();
}
module.exports = { bnToEnNum };
