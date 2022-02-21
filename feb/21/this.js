//this keyword

let message = {
  name: "jaden",
  regularFunction: function () {
    // console.log(this);
    console.log("Hello " + this.name);
  },
  arrowFunction: () => console.log("Hi " + this.name),
};

// message.regularFunction();
// message.arrowFunction();
// console.log(this); // it should console log the window object, but its just printing an empty object lol

//this refers to the owner of the function we are executing
//arrow functions do not have their own this value

//part 2
let person1 = { name: "John", age: 22 };
let person2 = { name: "Mary", age: 26 };

let sayHi = function () {
  console.log("Hi, " + this.name);
};

sayHi.call(person2);
