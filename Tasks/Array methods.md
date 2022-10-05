# Array methods

1. ## **array.length**

returns the number of elements in the array

```js
var arr = [1, 2, 3, 4];
var len = arr.length; // returns 4
```

---

2. ## **array.reverse**

returns the reversed version of the original array

```js
var arr = [1, 2, 3, 4];
var reversed = arr.reverse(); // returns [4,3,2,1]
```

---

3. ## **array.sort**

- Sorts the array in specified order.
- Usually the sort works based on alphabetical order.
- Takes an callback function for comparison _(optional)_.

```js
var arr = [1, 2, 4, 3];
var result = arr.sort(); // prints [1,2,3,4]

var arr2 = [1, 2, 3, 4, 11];
var result = arr2.sort(); // prints [1,11,2,3,4], this happens because all the element is considered as strings and compared so 11 will be considered as "1".

var arr3 = [1, 11, 2, 3, 4];
var result = arr3.sort((a, b) => a - b); // prints [1,2,3,4,11]
```

---

4.  ## **array.fill**
    Returns a array by replacing all the existing elements with the specified value.

```js
var arr = ["Apple", "Banana", "Grape"];
arr.fill("cherry");
console.log(arr); // prints [cherry,cherry,cherry];
```

---

5.  ## **array.filter**
    Returns a _new array_ of elements which passes the callback statement.

```js
var arr = [1, 2, 3, 4];
var filtered = arr.filter((element, index) => element > 2); // returns [3,4]
```

---

6.  ## **array.find**
    Returns the very first element which passes the callback statement.

```js
var arr = [1, 2, 3, 4];
var found = arr.find((element, index) => element > 2); // returns 3
```

---

7. ## **array.findIndex**
   Returns the very first element's index value which passes the callback statement.

```js
var arr = [1, 2, 3, 4];
var found = arr.findIndex((element, index) => element > 2); // returns 2
```

---

8.  ## **array.flat**
    creates a new array by flattening a nested array up to the specified depth.

```js
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flattenArray = numbers.flat(2);
console.log(flattenArray); // returns [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
```

---

9. ## **array.flatMap**
   method first maps each element of an array using a mapping function, then flattens it into a new array.

```js
const arr1 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr1.flatMap((num) => num);
console.log(flattened); // returns [ 1, 2, 3, 4, 5, 6 ]
```

---

10. ## **array.join**
    returns the concatenated array elements to string.

```js
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.join(""));
("123456");
```

---

11. ## **array.pop**
    Removes the last element from the array

```js
var arr = [1, 2, 3];
console.log(arr.pop()); // returns [1,2];
```

---

12. ## **array.shift**
    Removes the first element from the array

```js
var arr = [1, 2, 3];
console.log(arr.shift()); // returns [2,3];
```

---

13. ## **array.push**
    Adds an element to the end of the array

```js
var arr = [1, 2, 3];
arr.push(4);
console.log(arr); // returns [1,2,3,4]
```

---

14. ## **array.unshift**
    Adds an element to the beginning of the array

```js
var arr = [1, 2, 3];
arr.unshift(4);
console.log(arr); // prints [4,1,2,3]
```

---

15. ## **array.concat**
    Merges two arrays together as one array

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merged = arr1.concat(arr2);
console.log(merged); // returns [1,2,3,4,5,6];
```

---

16. ## **array.splice**
    returns an array by adding or removing elements from its original position.

```js
var arr = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); ["Jan", "Feb", "March", "April", "June"] // Here we are adding Feb value in position 1.

// argument syntax
splice(startIndex, deleteCount, value to be added)
```

---

17. ## **array.lastIndexOf**
    returns the last index at which a given element can be found in the array.

```js
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo")); // prints 3
```

---

18. ## **array.indexOf**
    returns the first occurrence index of the specified element in the array.

```js
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo")); // prints 1
```

---

19. ## **array.of**
    Creates a new array instance from the specified arguments.

```js
const arr = Array.of(1, 2, 3, 4); // returns [1,2,3,4]
```

---

20. ## **array.slice**
    Returns a shallow copy of a portion of the array based on the specified arguments.

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// returns ["camel", "duck", "elephant"]
```

---

21. ## **array.includes**
    Returns a boolean value based on whether the specified element is in the array.

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.includes("ant"));
// returns true
```

---

22. ## **array.reduceRight**
    Reduces array to single value but executes from right to left.

```js
const array1 = [0, 1, 2, 3, 4, 5];
const result = array1.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);
// returns 15, but the first element added will be 5
```

---

23. ## **array.reduce**
    Reduces the array to a single value but executes from left to right.

```js
const array1 = [0, 1, 2, 3, 4, 5];
const result = array1.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);
// returns 15, but the first element added will be 0
```

---

24. ## **Array.isArray()**
    takes an value as an argument and returns a boolean value whether the specified value is an array or not.

```js
var arr = [1, 2, 3];
console.log(Array.isArray(arr)); // returns true
```

---

25. ## **array.map**
    Returns a new array by mapping current value to the callback function statement

```js
var array = [1, 2, 3, 4];
const mapped = array.map((num) => num * 2); // returns [2,4,6,8]
```

---

26. ## **array.forEach**
    Loops through an array on which it was called,takes an callback function.

```js
var array = [1, 2, 3, 4];
var newArray = [];
array.forEach((value, index, array) => {
  newArray.push(value);
});
console.log(newArray); // prints [1,2,3,4]
```

---

27. ## **array.some**
    Returns a boolean value if any element passes the function statement.

```js
var arr = [1, 2, 3, 4];
var someCheck = arr.some((num) => num > 2);
// returns true
```

---

28. ## **array.every**
    Returns a boolean value if all element passes the function statement.

```js
var array = [1, 2, 3, 4];
var everyCheck = array.every((num) => num > 2);
// returns false
```

---

29. ## **array.entries**
    Returns a iterator object which contains key-value pairs of the array.

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}
/* prints
[0, 'a']
[1, 'b']
[2, 'c'] */
```

---

30. ## **array.key**
    Returns a iterator object which contains only key (index) of the array.

```js
let alphabets = ["A", "B", "C"];
let iterator = alphabets.keys();
for (let key of iterator) {
  console.log(key);
}
/* prints
0
1
2 */
```

---

31. ## **array.values**
    Returns a iterator object which contains only value of the array.

```js
let alphabets = ["A", "B", "C"];
let iterator = alphabets.values();
for (let key of iterator) {
  console.log(key);
}
/* prints
A
B
C */
```

---

32. ## **array.copyWithin**
    This method copies array elements from one position to another in the given array.

```js
let words = ["apple", "ball", "cat", "dog"];
words.copyWithin(3, 0);
console.log(words); // returns ["apple", "ball", "cat", "apple"];
```

---

33. ## **array.at**
    Returns a value based on the specified array position where the first element of array will be 1.

```js
var array = ["apple", "ball", "cat", "dog"];
console.log(array.at(1)); // returns "apple"
console.log(array.at(-1)); // returns "dog"
```

---
