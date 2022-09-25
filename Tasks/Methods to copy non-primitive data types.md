# Methods used to copy non-primitive data types

## **On Array**

---

1. **Spread Operator**
   - One of the modern syntax introduced in ES6 for making a shallow copy
   - Spread syntax (`...`) allows an array or string to be expanded
   - It can also be used with objects
   - More on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
   ```js
   var array1 = [1, 2, 3, 4];
   var array2 = [...array2]; // this will make a copy of array1 and stores in array2 which has no link to array1
   array1.push(5);
   console.log(array1); // prints [1,2,3,4,5];
   console.log(array2); // prints [1,2,3,4];
   ```

---

2.  **slice()**

    - `slice()` also returns a shallow copy of array.
    - But, we can we specify the start and end points for copying (optional).
    - The original array won't be modified.
    - More on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

    ```js
    var array1 = [1, 2, 3, 4];
    var array2 = array1.slice(); // prints [1,2,3,4]; as a new entity in heap memory

    // slice takes two arguments which will be the indexes of the array
    slice(startIndex, endIndex);
    ```

---

3. **concat()**
   - `concat()` method is used to merge two or more arrays as one.
   - It results in a new array.
   - More on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
   ```js
   var array1 = [1, 2, 3, 4];
   var array2 = [].concat(array1); // returns a new array with values of array1
   ```

---

4. **Naive way - By using loops**
   - Since we all know how use loops
   - we just have to implement them with our logics
   ```js
   var array1 = [1, 2, 3, 4];
   var array2 = [];
   for (let i = 0; i < array1.length; i++) {
     array2.push(array1[i]); // each element will be pushed in array2
   }
   console.log(array2); // returns [1,2,3,4];
   ```

---

5. **JSON format**

   - There is an alterative for all these which is supported in all languages
   - Since JSON is consider as a supported language in all languages.
   - We can go up with `JSON.stringify` and `JSON.parse`

   ```js
   var array = [1, 2, 3, 4];

   var arrayAsString = JSON.stringify(array); // returns "[1, 2, 3, 4]"

   var jsonConvertedAsArray = JSON.parse(arrayAsString); // returns [1,2,3,4] as array
   ```

---

# On objects

1. **Object.assign**
   - This method copies all enumerable own properties from one object to another object
   - returns a modified object which will still be linked to its some original properties
   - Takes two arguments, 1st will be the target and the second will be the source.
   ```js
   var obj1 = {
     name: "code",
     language: "js",
   };
   var obj2 = object.assign({}, obj1); // returns same as obj1.
   ```

---

2. **Spread Operator**
   - Just like in arrays, the (`...`) operator can also be used in objects for making a copy.
   ```js
   var obj1 = {
     name: "code",
     language: "js",
   };
   var obj2 = { ...obj1 };
   console.log(obj2); // returns a copy of obj1
   ```

---

3. **Naive way - By using loops**
   - Since we all know how use loops
   - we just have to implement them with our logics
   ```js
   var obj1 = {
     name: "code",
     language: "js",
   };
   function copyOfObj(originalObj) {
     let newObj = {};
     let key;
     for (key in originalObj) {
       newObj[key] = originalObj[key];
     }
     return newObj;
   }
   var obj2 = copyOfObj(obj1);
   console.log(obj2); // returns a new object with same key & value as obj1;
   ```

---

4. **JSON format**
   - There is an alterative for all these which is supported in all languages
   - Since JSON is consider as a supported language in all languages.
   - We can go up with `JSON.stringify` and `JSON.parse`
   ```js
   var obj1 = {
     name: "code",
     language: "js",
   };
   var obj2 = JSON.parse(JSON.stringify(obj1));
   console.log(obj2);
   ```

---
