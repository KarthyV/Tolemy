# Function Composition

Function composition is an approach where the result of one function is passed as an argument to another function where it happens untill the final execution is achieved.

```js
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

var output = square(double(2)); // where double(2) returns 4 which is passed as an argument to square, prints 16.

// What exactly happens is

var output1 = double(2); // 4 is stored
var output2 = square(output1); // Here 4 is passed as an argument which returns 16
```
