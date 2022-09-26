# Lexical Scope

The ability for a function scope to access variables from the parent scope.

```js
let avenger = "Hulk";

function solarSystem() {
  let password = "secret";
  function earth() {
    if (password == "secret") {
      let title = "strongest";
      console.log(`${title} avenger is ${avenger}`);
    } else {
      console.log("Access Denied");
    }
  }
  earth();
}

solarSystem();
```

From the above code, The variable avenger is accessible by solarSystem and earth functions, but the title is only accessible by the earth, So the whatever variable declared in parent scope will be accessible by the following child scopes, but whatever available in child scope will not be accessible by parent scope.
