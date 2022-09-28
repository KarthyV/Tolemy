All the three methods makes a function take a forceful context

# call

calls a function with context forcefully imbedded

```js
const name = {
  firstName: "javascript",
  lastName: "script",
};
function gender(greet) {
  return `${greet} It's ${this.firstName}, a ${this.lastName} language`;
}

console.log(gender.call(name, "hello")); // the "name" object is the context passed to gender forcefully
```

# apply

works similar to call but takes arguments as array

```js
const name = {
  firstName: "javascript",
  lastName: "script",
};
function gender(greet) {
  return `${greet} It's ${this.firstName}, a ${this.lastName} language`;
}

console.log(gender.apply(name, ["hello"])); // the "name" object is the context passed to gender forcefully
```

# bind

Bind will return a new function with the context attached to it on which it was called.

```js
const name = {
  firstName: "javascript",
  lastName: "script",
};

function gender(greet) {
  return `${greet} It's ${this.firstName}, a ${this.lastName} language`;
}

const genderText = gender.bind(name);
console.log(genderText("hello"));
```
