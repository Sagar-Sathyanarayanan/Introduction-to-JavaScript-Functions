/* Write an anonymous function expression that stores a function in a variable called "laugh" 
and outputs the number of "ha"s that you pass in as an argument.*/

/* laugh(3);
Returns: hahaha! */ 

var laugh = function(num){
    var smile = "";
    for(x=0;x<num;x++){
        smile = smile + "ha";
    }
    return smile + "!";
}
console.log(laugh(10));