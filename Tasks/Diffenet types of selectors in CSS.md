# Types of Selectors in CSS

> ## Universal Selector - (`*`)
>
> The asterisk symbol is a type of selector which selects `all` the elements of any type.
>
> ```css
> * {
>   color: "green";
> }
> ```

---

> ## Type Selector (or) Element Selector
>
> The selector which allows you to match elements by `node name` (or) `tag name` is known as type selector
>
> ```css
> p {
>   /* This type will select all p tags in the document */
>   color: "green";
> }
> ```

---

> ## Class Selectors
>
> - class selectors matches elements based on the name value given inside the html class attribute
> - A dot as to be added in front of that name for accessing
> - Widely used and recommended
>
> ```css
> .testing {
>   /* <p class="testing">Hello</p>
>  Here testing is the value of class attribute */
>   color: "green";
> }
> ```

---

> ## ID Selectors
>
> - Id selectors matches elements based on the name value given inside the html id attribute
> - Accessed by using a `#` in front of the name value
> - Can be used only in a unique manner,Not highly recommended
>
> ```css
> #testing {
>   /* <p id="testing">Hello</p>
>  Here testing is the value of class attribute */
>   color: "green";
> }
> ```

---

> ## Attribute Selectors
>
> - This CSS selector selects elements based on their presence or value given inside the attribute.
>
> ```css
> a[href="example.com"] {
>   ...;
> } /*anchor tags which has a href value of example.com will be targeted */
> ol[type="b"] {
>   ...;
> } /* ordered list tags which consists of small alphabets as type will be targeted */
> ```

---

> ## Grouping selectors
>
> - The (`,`) selector selects both the matching nodes
>
> ```css
> div,
> span {
>   ...;
> } /* This matches both div & span elements entirely */
> ```

---

> ## Combinators
>
> > ### Descendant combinator
> >
> > The empty space between elements selects all the specified child element of its parent
> >
> > ```css
> > div span {...} /* This matches all span elements inside of div
> > ```
>
> ---
>
> > ### Child combinator
> >
> > The `>` selects all the direct child element of the parent element
> >
> > ```css
> > div > span {...} /* This matches all span element of div tag which are directly a child
> > ```
>
> ---
>
> > ### Adjacent combinator
> >
> > - The `+` separators two elements were the second element is a followup of the first element
> > - For the above condition, both element must be under same parent element
> >
> > ```css
> > img + p {
> >   ...;
> > } /* The p tags which come after img tag are selected, where both img & p comes under same parent element */
> > ```

---

> # Pseudo Classes
>
> Pseudo Classes lets you apply a style to an element not only when its in DOM tree but can also add styles based on user interactions
>
> ```css
> a:hover {
>   ...;
> } /* If the user is hovering the anchor tag the block of css rule will be applied */
>
> .container:fullscreen {
>   ...;
> } /* When the element is switched back and forth between fullscreen this css rule will be applied */
>
> input:autofill {
>   ...;
> } /* Matches the input when it gets autofilled by the browser */
>
> *:enabled {
>   ...;
> } /* Represents all the enabled elements in the DOM */
>
> *:disabled {
>   ...;
> } /* Represents all the disabled elements in the DOM */
>
> input:checked {
>   ...;
> } /* Represents any radio,checked,select element that is checked or toggled in state */
>
> a:link {
>   ...;
> } /* Matches anchor element which is not yet visited */
>
> a:visited {
>   ...;
> } /* Matches anchor element which is already visited */
>
> li:nth-child(arg) /* selects all the li elements with respective to argument which will be odd or even */
> 
> li:first-child {
>   ...;
> } /* selects the first sibling among the group */
>
> li:last-child {
>   ...;
> } /* selects the last sibling */
>
> button:active {
>   ...;
> } /* represents an element that is being activated by user */
>
> input:focus {
>   ...;
> } /* represents an element that has received focus */
> ```

---

> # Pseudo Elements
>
> A pseudo element is a keyword added to a selector that lets style a specific part of the selected element which is not originally present in the DOM
>
> ```css
> p::first-line {
>   ...;
> } /* selects every first line of the p tag */
>
> a::after {
>   /* this adds a new link at the end of the a tag */
>   content: '("attr(href)")';
> }
> a::before {
>   /* this adds a new link at the beginning of the a tag */
>   content: '("attr(href)")';
> }
>
> input::placeholder {
>   ...;
> } /* Targets the placeholder attribute of the input tag */
>
> p::selection {
>   ...;
> } /* Applies styles to a part of the content which was selected by the user */
> ```

---
