# Introduction-to-JavaScript-Functions
Questions on Functions


## Question 1:  Laugh it off - 1
```
Declare a function called laugh() that returns "hahahahahahahahahaha!".
Print the value returned from the laugh() function to the console.
```
## Answer 1: 

```
function laugh(){
    var message = "hahahahahahahahahaha!";
    /* the retuen value will hold the message to be printed out in console.log. 
    It will stop executing the function once it sees the return command. */
    return message;

}
console.log(laugh());
```

## Question 2: Laugh it off-2 

```
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!"
```
## Answer 2: 

```
function laugh(num){
    var laughString = "";
    for(x = 0; x < num; x++ ){
        laughString = laughString + "ha";
    }
    return laughString + "!"

}
console.log(laugh(3));
```
 ## Hoisting: 
 
 ```
 Hoisting is a very quirky topic in functions. In the example below you can see that: 
 
 sayHi("Sagar");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}

Here even though the function declaration is after the final comment. 
The output of this code will be ---> undefied Sagar. This is hoisting. 
The undefied part of this code is because in hoisting, variable assignments are not hoisted.
Hence the code will not recognise the declaration of variable greeting. 
```

## Question 3: Build a Triangle

```
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
```
## Answer 3:

```
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

function buildTriangle(num){
      var triangle = "";
      for(var x =1; x<num;x++){
          triangle = triangle + makeLine(x);
      }
      return triangle;

  }
  console.log(buildTriangle(10));
```
## Question 4: Laugh 
```
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
```
## Answer 4: 
```
var laugh = function(num){
    var smile = "";
    for(x=0;x<num;x++){
        smile = smile + "ha";
    }
    return smile + "!";
}
console.log(laugh(10));
```
## Question 5: Cry 
```
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
```
## Answer: 
```
var cry = function letsCry(){
    return "boohoo !"
}
console.log(cry());
```
## Question 6: Inline 

```
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
```
## Answer: 
```
/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function laugh(num){
    var smile = "";
    for(x=0;x<num;x++){
        smile = smile+"ha";
    }
    return smile+"!";
})
```

