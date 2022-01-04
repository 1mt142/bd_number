# Number conversion Bangla/English To English/Bangla ,English To Bangla Words

# Install

```javascript
$ npm install --save bd_number
```

# Usage | Bangla To English Number

```javascript
const { bnToEnNum } = require("bd_number");
let bn = bnToEnNum("৮২৬");
console.log(bn); // 826
```

# Usage | English Number To Bangla Word

```javascript
const { enToBnWord } = require("bd_number");
let output = enToBnWord(50000);
console.log(output); // 'পঞ্চাশ হাজার'
```
