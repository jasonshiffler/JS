/*Function declarations contain the word function, an identifier that names the function, a pair of () that 
contains 0 or more arguments, and {} that contain zero or more JS expressions. If the return statement doesn't
have an associated expression it returns undefined.*/
//Function declarations are hoisted to the top of the enclosing script/function/block

function myFunction() {
    let outerVar = "OuterVar";
    inner();

    //Functions can contain function declarations
    function inner() {
        //enclosed function have access to closing scope
        console.log(outerVar);
    }
}

//Function expressions are not hoisted and do not exist until the expression that defines them are evaluated
const myFunExpression = function() {};

//ES6 introduces arrow function declaration.
const hipsterFun = () => {};

