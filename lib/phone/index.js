let getNumInfo = function phone(num) {
  // operator number  <num>
  if (num !== undefined && num.trim() !== "") {
    const validatorRegex = /(\+){0,1}(88){0,1}01(3|4|5|6|7|8|9)(\d){8}/;
    var originalNum = num;
    let countryCode = "+88";
    let status = {};
    let collectDigit = originalNum.replace(/[\D]/gi, "");
    let reduntantCountryCode = countryCode.concat(
      collectDigit.replace(/^\+*8+/gi, "")
    );
    let bdSuggestPhone = reduntantCountryCode.slice(0, 14);

    originalNum.slice(0, 3) === "+88"
      ? (status["inputLength"] = originalNum.length)
      : (status["inputLength"] = originalNum.length);

    if (
      validatorRegex.exec(originalNum) !== null &&
      validatorRegex.exec(originalNum)[0] === originalNum
    ) {
      status["isValidPhone"] = true;
    } else {
      status["isValidPhone"] = false;
    }

    function checkOperatorDigit() {
      let operatorDigit = bdSuggestPhone.slice(5, 6);
      if (
        operatorDigit === "3" ||
        operatorDigit === "4" ||
        operatorDigit === "5" ||
        operatorDigit === "6" ||
        operatorDigit === "7" ||
        operatorDigit === "8" ||
        operatorDigit === "9"
      ) {
        return true;
      }
      return false;
    }

    // operator status & need digit
    if (validatorRegex.exec(bdSuggestPhone) === null) {
      if (checkOperatorDigit() && bdSuggestPhone.length < 14) {
        status["errorStatus"] = "Number length must be 11 digits";
        status["needDigit"] = 14 - bdSuggestPhone.length;
      } else {
        status["hasOperator"] = false;
        status["operatorStatus"] = `(${bdSuggestPhone.slice(
          3,
          6
        )}) Invalid Operator`;
        status["status"] = `(${bdSuggestPhone.slice(3, 6)}) Invalid Operator`;
      }
    } else {
      status["hasOperator"] = true;
      status["operatorStatus"] = `(${bdSuggestPhone.slice(
        3,
        6
      )}) Valid Operator`;
      if (bdSuggestPhone.length >= 14) {
        status["withCountryCode"] = bdSuggestPhone;
        status["status"] = bdSuggestPhone;
      }
      // digit status exceed
      if (reduntantCountryCode.length > 14) {
        countExceedDigit = reduntantCountryCode.length - 14;
        status["exceed"] = countExceedDigit;
        status["hasExceed"] = true;
        status["originalNumber"] = reduntantCountryCode;
        status["exceedDigit"] = reduntantCountryCode.slice(
          14,
          reduntantCountryCode.length
        );
        status["errorStatus"] = `Exceed ${countExceedDigit} Digit`;
      }
    }
    return status;
  } else {
    return "Phone number is undefined";
  }
};

const isValidPhone = function phone(num) {
  if (num !== undefined && num.trim() !== "") {
    const validatorRegex = /(\+){0,1}(88){0,1}01(3|4|5|6|7|8|9)(\d){8}/;
    var originalNum = num;
    if (
      validatorRegex.exec(originalNum) !== null &&
      validatorRegex.exec(originalNum)[0] === originalNum
    ) {
      return true;
    } else {
      return false;
    }
  }
};
module.exports = { getNumInfo, isValidPhone };
