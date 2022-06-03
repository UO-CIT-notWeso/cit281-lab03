// TODO Part 9: Add the reverseString function to the module.exports object
// for import using require()
/*
module.exports = {
    greetings
};
*/
// TODO Part 10: Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself

const concatenateString = (str) => {
    return `${str}${str}`;
}

module.exports = {
    greetings: function(a){
      return "greetings to " + a
    }
  }

// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827

/*
function reverseString(str) {
    return str.split("").reverse().join("");
}
*/

/*
function reverseString = (str) => ("h", "e", "l", "l", "o"); {
    const reverseString = "hello";
    
    console.log([...reverseString]);
}
*/
/*
//Attempt #1
const reverseString = (str) => {
    const arr =[...str];
    
    return str.split("h", "e", "l", "l", "o")
}


//Attempt #2
const reverseString = (str) => {
    const arr =["hello"];
    
    console.log(...str)
}
*/

//Attempt #3
let str = 'hello';
console.log([...str]); 
