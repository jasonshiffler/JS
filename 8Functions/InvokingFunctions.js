/*Javascript functions can be invoked as 
-functions
-methods
-constructors
-through call() and apply() methods. */

/*Function invocation - the invocation context(this) is the global object. In strict mode this is undefined. Functions
written to be invoked as functions and not methods do not typically use this*/
function invokeMe() {
    console.log(this);
    return "Invoke Me";
}
invokeMe();

/*Method invocation - in a method invocation the object invoking the function becomes the invocation context
and the function body can refer to that object using the keyword this*/
const obj = {name: "Bob", invokeMe: function() {
    let self = this;
    function myThis() {
        console.log("Name is " + this.name); //Nested functions within a method can't use this to reference the enclosing object
        console.log("Name is " + self.name); //Common work around to lack of access to the object within a method's inner function
    }
    myThis();
    return "Invoke " + this.name;
}};
obj.invokeMe();

//Constructor call - Function is preceded by the new keyword. Constructor function implicitly returns this.
function Person(name) {
    this.name = name;
}
steve = new Person("Steve");

