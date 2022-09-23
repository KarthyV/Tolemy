# Hoisting

> ## Difference in Var,let,cont
>
> Re-declaration and Re-assignment are possible in `var` and `let`
>
> ```js
> var x;
> console.log(x); // prints undefined
> console.log(x1); // prints error not-defined
> ```
>
> ### Compiler
>
> Changes normal code to byte code for machine understandability.
> Javascript is complied language where compilation happens Just in time.
>
> ### JS has two phases
>
> - Compilation Phase
>   - Where all the declarations are noted and assigned undefined value initially
> - Execution phase
>   - Where the execution part happens

```js
var x1 = 7;

console.log(x1); // prints 7 since its accessed after initialization

console.log(x2); // prints undefined, because only the declaration x2 is available from creation phase which has undefined value until it reaches initialization

var x2 = 5;

console.log(x3); // prints error - not defined
```
