# What does parseInt does?

1. `parseInt()` method parses a string to a integer based on specified radix number in 2nd argument.
2. And it only parses the very first string, any white spaces will be considered in between will act as the end.
3. The return type will be a Integer where the decimals are also ignored.
4. The second argument will be based on the radix number system - [Radix](https://www.ics.uci.edu/~bic/courses/51/Lectures/Number%20Systems.pdf)
5. A radix parameter specifies the number system to use mainly of four system,

   - Binary system specified as `2`
   - Octal number system specified as `8`
   - Decimal number system specified as `10`
   - Hexadecimal number system specified as `16`

6. If radix is not specified, Javascript itself will consider 10 as default radix number, but if the value begins with '0x' javascript will consider 16 as default radix number.

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

// Example 5 with radix
console.log(parseInt("100", 2)); // returns 4, where takes binary number system.

// Example 6 with radix
console.log(parseInt("100", 8)); // returns 64, which considers octal number system.

// Example 7 with radix
console.log(parseInt("100", 10)); // returns 100, which will be decimal number system and the default radix parameter as well.

// Example 8 with radix
console.log(parseInt("100", 16)); // returns 256, where 16 belongs to hexadecimal number system.
```
