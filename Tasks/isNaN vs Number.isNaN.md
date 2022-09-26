# NaN

1. NaN stands for Not a number
2. It represents a value which is not a valid number
3. It's the one and only value which is not equals to itself
4. Data Type of NaN is number

```js
console.log("abc" / 2); // returns NaN
```

5. This above line gives NaN because `/` is a numerical operator which expects 2 numbers at both side, but since 'abc' is not a number even though js tries coercion.
6. Coercion means converting from one dataType to another dataType. It has two ways
   1. **Implicit** - Js itself tries to convert the datatype
   ```js
   var x1 = "7" - 6; // string "7" is converted implicitly by js due to "-" is a numerical operator
   ```
   2. **Explicit** - This where the datatype is converted manually by us.
   ```js
   var x1 = Number("7") - 6; // Here "7" was converted to number with external factors
   ```

## Methods to verify if it falls under NaN

1. isNaN()
2. Number.isNaN()

```js
isNaN("abcd"); // returns true because even though coercion takes place it's not a number
isNaN("51"); // returns false, because coercion happens and "51" will be converted as 51 which is a number
```

## Difference between is.NaN() and Number.isNaN()

1. `isNaN()` function converts the argument to a number and returns true if the value is NaN
2. `Number.isNaN` function checks the argument type if its number and the value is equal to NaN.

| Value(x)         | isNaN(x) | Number.isNaN(x) |
| ---------------- | -------- | --------------- |
| NaN              | true     | true            |
| undefined        | true     | false           |
| {}               | false    | false           |
| []               | false    | false           |
| ""               | true     | false           |
| '123'            | false    | false           |
| '123e'           | true     | false           |
| parseInt('123e') | false    | false           |

Behind the Scenes

```js
function iSNaN(x) {
  return Number(x) !== +x; // returns a boolean value
}

console.log(iSNaN(NaN)); // NaN is not a number so prints true

console.log(iSNaN("123")); // '123' is converted as number so returns false

console.log(iSNaN(null)); // null is a falsy which is considered as 0

console.log(iSNaN(true)); // true is a truthy value which is considered as 1 in this case

function NumberIsNaN(x) {
  const number = Number(x);

  if (typeof x === "number" && isFinite(number)) {
    return true;
  } else {
    return false;
  }
}

console.log(NumberIsNaN(NaN)); // type of NaN is number and value is not a number so prints true

console.log(NumberIsNaN("123")); // even though the '123' is converted to number but the initial data type of the value is not an number so it returns false
```
