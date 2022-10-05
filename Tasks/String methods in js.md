# String methods

1. ## **length**
   returns the number of characters in the string.

```js
let word = "javascript";
console.log(word.length); // prints 10.
```

---

2. ## **replace**
   Returns a new string with replaced value based on the specified string, the very first occurrence will be replaced.

```js
let word = "javascript";
word.replace("b", "j"); // prints 'bavascript'
```

---

3. ## **indexOf**
   Returns the index of the first occurrence of the specified string.

```js
let word = "javascript";
word.indexOf("a"); // prints 1
```

---

4. ## **lastIndexOf**
   Returns the last index of the specified string.

```js
let word = "javascript";
word.lastIndexOf("a"); // prints 3
```

---

5. ## **startsWith**
   Checks if the string starts with the specified string and returns a boolean value.

```js
const word = "javascript";
word.startsWith("ja"); // returns true
```

---

6. ## **endsWith**
   Checks if the string ends with the specified string and returns a boolean value.

```js
const word = "javascript";
word.endsWith("pt"); // returns true
```

---

7. ## **toUpperCase**
   Returns the string as uppercase.

```js
const word = "javascript";
word.toUpperCase(); // returns 'JAVASCRIPT'
```

---

8. ## **toLowerCase**
   Returns the string as lowercase.

```js
const word = "javascript";
word.toLowerCase(); // returns 'javascript';
```

---

9. ## **includes**
   Checks if the string contains the specified string and returns a boolean value.

```js
const word = "javascript";
word.includes("pt"); // returns true
```

---

10. ## **repeat**
    Creates multiple instance based on the specified number.

```js
const word = "javascript";
word.repeat(3); // returns 'javascript javascript javascript'
```

---

11. ## **charAt**
    returns the character at the specified index in a string.

```js
const word = "javascript";
word.charAt(1); // returns a
```

---

12. ## **charCodeAt**
    Returns Unicode of the character at given index. The return integer may be from 0 to 65535.

```js
const word = "javascript";
word.charCodeAt(0); // returns 106
```

---

13. ## **fromCharCode**
    Returns a string from given the UTF-16 code units

```js
let string1 = String.fromCharCode(72, 69, 76, 76, 79); // returns 'HELLO'
```

---

14. ## **substring**
    Returns the specified part of the string with start index and end index as arguments.

```js
const message = "JavaScript is fun.";
message.substring(0, 10); // returns 'JavaScript'
```

---

15. ## **padStart**
    Adds a number of characters to the string at the beginning.

```js
const word = "javascript";
word.padStart(3, "*"); // returns '***javascript'
```

---

16. ## **padEnd**
    Adds a number of characters to the string at the end.

```js
const word = "javascript";
word.padEnd(3, "*"); // returns 'javascript***'
```

---

17. ## **codePointAt**
    Returns a integer that denotes the UTF-16 value.

```js
let word = "HELLO";
word.codePointAt(0); // returns 79
```

---

18. ## **fromCodePoint**
    Creates a new string based on the UTF code point.

```js
let alphabets = String.fromCodePoint(65, 66, 67);
console.log(alphabets); // returns 'ABC'
```

---

19. ## **match**
    returns the result of matching a string against a regular expression.

```js
const message = "JavaScript is a fun scripting language.";
message.match(/programming/); /* returns an array like [
  'programming',
  index: 20,
  input: 'JavaScript is a fun programming language.',
  groups: undefined
  ] */
```

---

20. ## **matchAll**
    returns an iterator of results after matching a string against a regular expression.

```js
const word = "JavaScript1JavaScript2";
const results = sentence.matchAll(/JavaScript\d/g);
for (result of results) {
  console.log(result);
}
/* returns 
["JavaScript1", index: 0, input: "JavaScript1JavaScript2", groups: undefined]
["JavaScript2", index: 11, input: 
"JavaScript1JavaScript2", groups: undefined] */
```

---

21. ## **localeCompare**
    checks if a given string comes before, after, or is equivalent as another string in sort order and returns 1 if true and -1 if not.

```js
let result1 = "c".localeCompare("b"); // returns 1
```

---

22. ## **search**
    searches for a match between a given string and a regular expression, returns the index integer as value.

```js
let string1 = "JavaScript JavaScript1";
string1.search(/(JavaScript)\d/); // searching for a word followed by a digit, returns 11
```

---

23. ## **replaceAll**
    Works exactly like `replace` but instead of replacing first occurrence, it replaces all occurrences.

```js
let word = "javascript";
word.replaceAll("b", "a"); // returns 'jbvbscript'
```

---

24. ## **concat**
    Adds the specified string in argument to the string on which it was called upon.

```js
let word = "javascript";
word.concat(" is", " fun"); // returns 'javascript is fun'
```

---

25. ## **split**
    Divides the string into each character based on the specified value.

```js
let word = 'javascript'
word.split(''). // returns ["j","a","v","a","s","c","r","i","p","t"];
```

---

26. ## **trim**
    Removes whitespaces from both end of the string.

```js
let word = " javascript ";
word.trim(); // returns 'javascript'
```

---

27. ## **slice**
    Cuts and returns a section of the string based on arguments.

```js
let word = "javascript is fun";
word.slice(0, 10); // returns 'javascript';
```
