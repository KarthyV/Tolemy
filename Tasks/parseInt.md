# What does parseInt does?

1. `parseInt()` method parses a string to a integer based on specified radix number in 2nd argument.
2. And it only parses the very first string, any white spaces will be considered in between will act as the end.
3. The return type will be a Integer where the decimals are also ignored.
4. The second argument will be based on the radix number system - [Radix](https://www.ics.uci.edu/~bic/courses/51/Lectures/Number%20Systems.pdf)

```js
// Example 1
const number = "5";
console.log(number + 5); //returns "55"
console.log(parseInt(number) + 5); // returns 5.

// Example 2
const number = "5.5";
console.log(number + 5); //returns "5.55"
console.log(parseInt(number) + 5); // returns 10 where the decimal will be ignored

// Example 3
const input = "53abc";
console.log(number + 5); //returns "53abc5"
console.log(parseInt(number) + 5); // returns 58 where the value "abc" is not a number and js will ignore them.

// Example 4
const input = "5 3abc";
console.log(number + 5); //returns "5 3abc5"
console.log(parseInt(number) + 5); // returns 10, because the white space after 5 will be considered as the end.
```
