<p align="center">
  <a href="https://npmcharts.com/compare/bd_number?minimal=true"><img src="https://img.shields.io/npm/dm/bd_number.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/bd_number"><img src="https://img.shields.io/npm/v/bd_number.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/bd_number"><img src="https://img.shields.io/npm/l/bd_number.svg?sanitize=true" alt="License"></a>
</p>

# Bangla Number Conversion

Convert Bangla Number to English Number,English Number to Bangla Number<br/>and English Number to Bangla Word

## Install

```javascript
$ npm install --save bd_number
```

## Usage | English To Bangla Word

```javascript
const { enToBnWord } = require("bd_number");
let word = enToBnWord(12433334);
console.log(word); // এক কোটি চব্বিশ লাখ তেত্রিশ হাজার তিনশ চৌত্রিশ
```

## Usage | Bangla To English Number

```javascript
const { bnToEnNum } = require("bd_number");
let en = bnToEnNum("৮২৬");
console.log(en); // 826
```

## Usage | English To Bangla Number

```javascript
const { enToBnNum } = require("bd_number");
let bn = enToBnNum("826");
console.log(bn); // ৮২৬
```

## Usage | Bangladeshi Phone Number Validator

```javascript
const { isValidPhone } = require("bd_number");
// OR
const { isValidPhone } = require("bd_number/lib/phone");

let isOkThisNumber = isValidPhone("01739000000");
console.log(isOkThisNumber); // true
```

### getNumInfo | If phone number is valid

```javascript
const { getNumInfo } = require("bd_number");
// OR
const { getNumInfo } = require("bd_number/lib/phone");

let numberInfo = getNumInfo("01739000000");
console.log(numberInfo);

// Output | If [isValidPhone: true]
{
  inputLength: 11,
  isValidPhone: true,
  hasOperator: true,
  operatorStatus: '(017) Valid Operator',
  withCountryCode: '+8801739000000',
  status: '+8801739000000'
}

```

### getNumInfo | If phone number is invalid

```javascript
const { getNumInfo } = require("bd_number");
// OR
const { getNumInfo } = require("bd_number/lib/phone");

let numberInfo = getNumInfo("0173900000000");
console.log(numberInfo);

// Output | If [isValidPhone: false]
{
  inputLength: 13,
  isValidPhone: false,
  hasOperator: true,
  operatorStatus: '(017) Valid Operator',
  withCountryCode: '+8801739000000',
  status: '+8801739000000',
  exceed: 2,
  hasExceed: true,
  originalNumber: '+880173900000000',
  exceedDigit: '00',
  errorStatus: 'Exceed 2 Digit'
}

```
