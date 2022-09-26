# Functions

- Functions are used to execute a set of code - which is repeated at multiple places
- Functions are also called as First class citizens, Because
  - It can be passed as an argument
  - It can be passed as an value
  - It can be returned as an value

## Function currying

- Function currying is something where a function is kept as base and with that as reference more instance of functions are built.

```js
const changeFirstLetter = (fn) => (str) => fn(str[0]);

const upperFirstLetter = changeFirstLetter((x) => x.toUpperCase());
const lowerFirstLetter = changeFirstLetter((x) => x.toLowerCase());

console.log(upperFirstLetter("cool")); // prints 'C'

// Here, the upperFirstLetter holds a function which looks as below
(str) => fn(str[0]);

// fn will be the argument passed in changeFirstLetter

// How to call a nested function
function greet() {
  return function () {
    console.log("Hello");
  };
}

greet()(); // returns Hello
```
