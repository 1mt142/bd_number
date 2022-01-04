# Bangla Number Conversion

Convert Bangla Number to English Number,English Number to Bangla Number
and English Number to Bangla Word

## Install

```javascript
$ npm install --save bd_number
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

## Usage | English To Bangla Word

```javascript
const { enToBnWord } = require("bd_number");
let word = enToBnWord(12433334);
console.log(word); // এক কোটি চব্বিশ লাখ তেত্রিশ হাজার তিনশ চৌত্রিশ
```
