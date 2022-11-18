# Mock Test

## 1) What is the difference between Promise.all() vs Promise.allSettled()? Explain with an example.

Promise.all() waits for all promises inside to get resolved, even if one promise gets rejected then it stops there and returns the error, and Promise.allSettled() waits for all the promises to get executed even if its in rejected state.

```js
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(3);
const promise3 = Promise.resolve(4);

Promise.all([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
// From above example, The output results as a array with all the promises values, if the promise2 is in reject stage it will stop there and returns the promise2 as error.

const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(3);
const promise3 = Promise.reject(4);

Promise.allSettled([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
// From above example, the allSettled will wait for all promises to be settled and returns the result of the  promises even if its a rejected.
```

## 2) What is the difference between Promise.any() vs Promise.race()? Explain with an example.

Promise.race() returns the very first promise which is getting finished even if its a rejected promise, but promise.any() waits for all promise to get resolved and returns the very first promise which is getting resolved

```js
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(3);
const promise3 = Promise.reject(4);

Promise.race([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
// Here, the very first promise which gets settled will be returned even if its a rejected one.

Promise.any([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
// Here, all the promises are fired at same time, and only the first resolved promise is returned.
```

## 3) List all lifecycle methods and their equivalent hook

```js
// componentWillmount
useEffect(() => {}, []);

// componentDidMount
// componentWillUpdate
// componentDidUpdate
useEffect(() => {}) || useEffect(() => {}, [dependencyArray]);

//componentWillUnmount
useEffect(() => {
  return () => {};
}, []);
```

## 4) What is higher order function? Explain with an example

A function having another function as an argument is known as higherOrder functions

```js
function one() {}

one(() => {});
```

## 5) What is the difference between event stoppropagation vs stopimmediatepropagation. Explain with an example

```html
<div>
  <p>
    <a></a>
  </p>
</div>
```

```js
div.addEventListener("click", () => console.log("Hello"));
pEvent1.addEventListener("click", () => console.log("This is from P event 1"));
pEvent2.addEventListener("click", () => console.log("This is from P event 2"));
a.addEventListener("click", () => console.log("This is from a tag"));

/* With the above syntax as example, We are having one eventHandler in <div></div> tag and two event Handler in <p></p> tag and finally one event handler in <a></a> tag,
So when we are using stopPropagation() on <p></p> tag and the event is triggered from <a> tag the result will be like = 'This is from a tag' >> 'This is from P event 1' >> 'This is from P event 2',
But if we use stopImmediatePropagation() on same <p> tag the result will be like = 'This is from a tag' >> 'This is from P event 1'. The execution will stop within the handler itself on stopImmediatePropagation and the execution stops only after executing all event handlers on the same tag in stopPropagation. */
```

## 6) What is "key" prop and what is the benefit of using it in arrays of elements?

React uses virtualDom where all the elements are stored as key,value pair, so when we are mapping the same elements in repeated way, react won't be able recognise them, so by passing key(which may be the index value or an unique value) it recognise the exact match and updates it

## 7) What is Lifting State Up in React? Explain with example

Having a parent component and passing the state as prop for mulitple child components is known lifting state up.

## 8) Explain the difference between Object.freeze() vs const

Object.freeze() is used on Object's property where the value is not mutable again;
const is used for declaring the value where re-declaration and re-assignment is not possible.

```js
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33; // Throws an error

const obj = {
  prop: 42,
};

obj.prop = 33; // Won't throw error in this case
obj = { new: 33 }; // throws an error because re-assignment is not possible in const
```

## 9) What strict mode in javascript?

strict mode is introduced as ES6 feature, where the code syntax and the variables cannot be used without declaration.

```js
// Before strict mode :

x = 5;
console.log(x); // returns 5

// After strict mode

x = 5;
console.log(x); // returns error
```

## 10) What is difference between **proto** vs prototype in Object? Explain with an example

**proto** is a object which refers to the properties from where it has inherited them and prototype is an constructor which is available on all non-primitive datatypes

```js
var karthi = { bike: "Xtreme" };
var gopi = { car: "Thar" };
var zeni = { accessories: ["earphones", "charger"] };

Object.setPrototypeOf(karthi, gopi);
Object.setPrototypeOf(gopi, zeni);

console.log(karthi.__proto__); // Now karthi has access to gopi's property which is __proto__
```

## 11) What will be the output of the following JavaScript code? Why?

```js
var grades = "S";
var answer;
switch (grades) {
  case "S":
    answer += "10";
  case "A":
    answer += " 8";
  case "B":
    answer += " 6";
  default:
    answer += " 0";
}
document.write(result); // returns 'undefined10 8 6 0'

/* Because initial value of answer will be undefined and when the case is 'S' undefined will be concatenated with '10'and since there is no break keyword it continues till the last. */
```

## 12) What is the output of this code snippet? and Why?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

0,1,2 and 0,1,2 because each time the setTimeout is kept in callBackQueue where the first setTimeout is executed first followed by the same order

## 13) What's the output? Why?

```js
const person = {
  name: "Lydia",
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person); // prints 22
changeAgeAndName();

console.log(person);

/* 22 will be the output for changeAge(person) , because the argument passed is person object.

For changeAgeAndName it'll be {
    age: 22, name: 'Sarah'
} Here, the argument is not passed so the parameter is checked which as a default value

*/
```
