// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
// myFunction();

// Explanation: 
/* because nestedFunction is inside the same closure  as the definition of internal. It could also reference external if it wanted to because it can also look outward for the value of variables, if there were another function outside of myFunctions closure, neither that function, nor it's nested function could access the internal variable, but they could also both access external */


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        count += i;
    }
    return count;
}

// console.log(summation(3));
// console.log(summation(5));
// console.log(summation(9));