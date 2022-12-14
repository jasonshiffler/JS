/*Javascript objects are unordered collections of properties, each of which has a name and a value.
Objects can be created with object literals, the new keyword, and with the Object.create() function.*/

/*An Object literal is an expression that creates a new and distinct object each time it is evaluated.
All Object literals share the same prototype, Object.prototype*/
let empty = {};
let one = { one: 1 };

let two = {
  two: 2,
  getTwo: function () {
    return this.one;
  },
};
two.__proto__ === Object.prototype; // evaluates to true

templateObject = {x:1, y:2, laugh:function(){console.log("Ha!");}}

//Object.create creates a new object using the argument as the prototype for the new object.
let coords =  Object.create(templateObject);
coords.x == 1 //evaluates to true since the prototype has an x property.

//If null is the argument for Object.create() the created object has no prototype!
let noProto = Object.create(null);

//This is the same as creating with an object literal{}
let normalProto = Object.create({});
let emptyLiteral = {};
normalProto.__proto__ === emptyLiteral.__proto__; //evaluates to true

//Creating Objects with new. new keyword followed by function invocation creates and initializes an object.
//Objects created from new inherit properties from the prototype object.
let o = new Object();
let a = new Array();
let d = new Date();
let r = new Map();

//d no longer inherits from the Date prototype.
d.__proto__ = d.__proto__.__proto__;