// Exploring JavaScript!
console.log('Hello World!');

//ES6 usess let instead of var
//Variable names should be meaningful
//Cannot start with a number (Eg: 1name)
//Can contain white space or hyphen
//Variables are case sensitive 

let name = 'Sid';
console.log(name);

let first_name = 'Siddhesh';
let last_name = 'Rb';

//Constant - There are situations where you do not want the value of your variable to change.
//Hence, there are constants.
const interestRate = 0.3;
console.log(interestRate);

//Primitive Data types
let id = 1; //Number literal
let firstName = 'John'; //String literal
let isMale = true; //Boolean literal
let lastName = undefined;
let country = null;

//Variables in JavaScript are dynamically typed
let color = 'red';
console.log(typeof (color)); //string

color = 1;
console.log(typeof (color)); //number

//Objects
let person = {
    id: 1,
    firstName: 'John',
    age: 28,
    country: 'India',
    isNRI: true,
    lastName: undefined,
    contact: null
}

console.log(person);
console.log("Type of person object is : ", typeof (person));

//Dot Notation
person.name = 'David';
console.log("Name of the person is ", person.name);

//Bracket Notation (when we do not know the property type. When the target property is selected by the user at runtime)
person['name'] = 'Jack';
console.log("Name of the person with Bracket Notation: ", person['name']);

//Arrays
let selectedColors = ['red', 'blue', 'green'];
selectedColors[3] = 1;
selectedColors.push(person.name);
console.log(selectedColors);

//Functions
greet(person, 'Smith');
function greet(person, lastName) {
    console.log('This is a function!');
    console.log('Hello, ' + person.name + ' ' + lastName);
}

//Function to calculate a square
let number = 9;
console.log('Square of '+ number + ' is: ' + square(number));

function square(number) {
    return number * number; 
}

