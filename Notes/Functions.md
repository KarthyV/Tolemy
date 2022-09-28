# Functions

- Functions are used to execute a set of code - which is repeated at multiple places
- Functions are also called as First class citizens, Because
  - It can be passed as an argument
  - It can be passed as an value
  - It can be returned as an value

## Types of functions

- Normal functions
- Anonymous Functions
- Arrow functions
- IIFE functions

---

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

---

## Compose & Pipe format using fn composition

```js
const double = (x) => x * 2;
const sqr = (x) => x * x;

const pipe = (fn1, fn2, x) => fn2(fn1(x)); // Execution pattern

const compose = (fn1, fn2, x) => fn1(fn2(x)); // Execution pattern
```

## IIFE - Immediately Invoked function expression

- IIFE is used to shadowing global variables to avoid name clash.
- It's a block scope

Declarative vs Imperative
