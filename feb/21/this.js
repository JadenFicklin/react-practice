//this keyword

//part 1
let message = {
  name: "jaden",
  regularFunction: function () {
    // console.log(this);
    console.log("Hello " + this.name);
  },
  arrowFunction: () => console.log("Hi " + this.name),
};

message.regularFunction();
message.arrowFunction();
console.log(this); // it should console log the window object

//this refers to the owner of the function we are executing
//arrow functions do not have their own this value

//part 2
let person1 = { name: "John", age: 22 };
let person2 = { name: "Mary", age: 26 };

let sayHi = function () {
  console.log("Hi, " + this.name);
};

sayHi.call(person2);

//part 3
//call vs apply
function introduction(name, profession) {
  console.log("my name is " + name + " and I am a " + profession + ".");
  //   console.log(this);
}
introduction("john", "student");
introduction.apply(undefined, ["marry", "lawyer"]);
introduction.call(undefined, "james", "artist");

//when to use one over the other?
//use the apply method when the input parameter is already in the form of an array consisting of similar values
//other wise if you are dealing with multiple arguments that arent related to eachother use the call method.

//part 4
//bind method

let person1Bind = {
  name: "mary",
  getName: function () {
    return this.name;
  },
};
let person2Bind = { name: "John" };
let getNameCopy = person1Bind.getName.bind(person2Bind);
console.log(getNameCopy()); //return John
