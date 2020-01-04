/* Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!"
*/

function laugh(num){
    var laughString = "";
    for(x = 0; x < num; x++ ){
        laughString = laughString + "ha";
    }
    return laughString + "!"

}
console.log(laugh(3));