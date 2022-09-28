# Normal Function

- Requires a function keyword and return keyword mandatorily for returning the value.
- this keyword becomes the context on which object it was called on.
- can be hoisted.

```js
function add(n1, n2) {
  return n1 + n2;
}
add(2, 4);
```

# Arrow Function

- Doesn't require a function keyword and return keyword if its a single line statement
- this keyword wont accept a context, it'll point out to window as this.
- Cannot be hoisted.

```js
const add = (n1, n2) => n1 + n2;
const test = (x) => x + 1; // if its a one argument parenthesis is not required
```
