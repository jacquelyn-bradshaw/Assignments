# Answers to question 2 of assignment 2

## 2.1 - unshift(), shift(), split()

### unshift()

unshift() adds one or more elements to the beginning of the array.

### shift()

shift() removes the first element of the array. The removed value can be stored in a variable.

### split()

split() takes a string and splits it into individual characters or words and stores them in a new array.

### Example

To create an array of degree streams:

```
const degreeStreams = [“software engineering”, “data”, “full stack”, “product management” ]
```

To remove one element from the beginning of the array:

```
degreeStreams.shift()
```

This will leave you with the array degreeStreams holding the elements ["data", "full stack", "product management"].

To remove one more element from the beginning of the array:

```
degreeStreams.shift()
```

This will leave you with the array degreeStreams holding the elements ["full stack", "product management"].

Now I can add the two elements I removed back into the beginning of the array:

```
degreeStreams.unshift(“software engineering”, “data”)
```

To split one of the elements in the array into individual characters, you can use:

```
degreeStreams[1].split(“”)
```

This will split the second element "data" into an array of individual characters e.g. ["d", "a", "t", "a"]

To split one of the elements in the array into individual words, you can use:

```
degreeStreams[0].split(“ ”)
```

This will split the first element "software engineering" into an array of individual words e.g. ["software", "engineering"].

## 2.2 Object methods

An object method is a function which is defined inside an object.

### Example

```
const react = {
  markupSyntax: "JSX",
  mainConcept: "UI components",
  reactHooks: {
    stateHooks: ["useState", "useReducer"],
    refHooks: ["useRef", "useImperativeHandle"]
  },
  openSource: true,
  maintainedBy: "Meta",
  releaseYear: 2013,
  reactDescription: function() {
    console.log("React is a library where you can use components to build user interfaces")
  },
  listReactHooks: function() {
    console.log(`React state hooks are ${this.reactHooks.stateHooks} and React ref hooks are ${this.reactHooks.refHooks}.`)
  }
}
```

## 2.3 DOM events

### onmouseover event

A function is triggered by the ommouseover event when the mouse pointer enters the specified element e.g an image could be enlarged when the mouse pointer enters the image element

### onsubmit event

A function is triggered by the onsubmit event when the form the event is assigned to is submitted

### onfocus event

A function is triggered by the onfocus event when an element such as an input element gets focus e.g. when you click into an input field the styling of the input box changes
