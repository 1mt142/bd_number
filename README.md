<p align="center">
  <a href="https://npmcharts.com/compare/bd_number?minimal=true"><img src="https://img.shields.io/npm/dm/bd_number.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/bd_number"><img src="https://img.shields.io/npm/v/bd_number.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/bd_number"><img src="https://img.shields.io/npm/l/bd_number.svg?sanitize=true" alt="License"></a>
</p>

# "bd_number"

"bd_number": An Open Source JavaScript Library for Bangla Number Conversion and Phone Number Validator.
<br/>

In today's world, it's important for websites and applications to be accessible and usable by a global audience. This includes not only the language used in the text, but also the format of numbers and dates. To address this need, an open source JavaScript library, "bd_number," has been developed specifically for converting numbers to Bangla text.
<br/>

"bd_number" is a small, lightweight library that makes it easy for developers to convert Bangla Number to English Number,English Number to Bangla Number ,English Number to Bangla Word, English Number To BDT Word in English and Bangladeshi Phone Number Validator representation. It is completely open source and can be used in any web project without any restrictions.
<br/>

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

## Usage | English Number To BDT Word in English

```javascript
const { numToBDTWord } = require("bd_number");
// OR
const { numToBDTWord } = require("bd_number/lib/numToWord");

let finalAmount = numToBDTWord(128357.66);
console.log(finalAmount);
// Output : One Lakh Twenty Eight Thousand Three Hundred And Fifty Seven Taka And Sixty Six Paisa
```
