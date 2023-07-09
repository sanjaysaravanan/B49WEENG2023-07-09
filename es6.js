// spread ( ... ) --> concept for using the values of an existing composite type to create a new composite type

const arr = [1, 2, true, null, undefined, 'SAM'];

// new arr with all the value of arr along with 'SAMMMY', false, null
const newArr = [...arr, 'SAMMMY', false, null];

const newArrTwo = ['SAMMMY', ...arr, false, null]

console.log(newArr);
console.log(newArrTwo);

const obj = { name: 'SAMMY', age: 40, role: 'Developer' };

// new obj with all the value of obj along native: 'Bengaluru', lang: 'Tamil'

const obj2 = { ...obj, native: 'Bengaluru', lang: 'Tamil' };

console.log(obj2);


// array destructure
// destructure will always happend in LHS

const arrOne = ['a', 'b', 'c'];

// ttake 1st, 3rd element valeus and create x, y variables
// let x = arrOne[0]; // normal approach
// let y = arrOne[2]; // normal approach

let [x, , y] = arrOne; // destructure approach

console.log(x, y);

// nested destructure approach

const arrTwo = [['a', 'b', 'c'], ['d', 'e', 'f']];

// store the 1st element's 2 element in p, store the second element's 3 element in q

// const p = arrTwo[0][1]; // normal approach

// destructure
const [[, p], [, , q]] = arrTwo;

console.log(p, q);



// Object Destructure

const objOne = { name: 'SAMMY', age: 40, role: 'Developer' };

// create variable name with the value of name in objOne 'SAMMY', role varaible with value of the role in objOne

// normal approach
// const name = objOne.name;
// const role = objOne['role'];

// destructure approach
const { name, role } = objOne;

console.log(name, role);

// create a variable fullName with the value of name from objOne
// different var name and key different

const { name: fullName, } = objOne;

console.log(fullName);

// nested destructuring
const objTwo = { name: 'SAMMY', age: 40, role: 'Developer', bio: { height: 180, weight: 80 } };

// destructure height value
const { bio: { height } } = objTwo;

console.log(height);



// Object Destructure without the element inside the array / object

const arrThree = [1, 2, 3];

const [, , , g] = arrThree;

console.log(g); // undefined since no element at 4th position

const objThree = { name: 'foo', fullName: 'bar' };
const { firstName } = objThree;

console.log(firstName); // undefined since no key called firstName exists in objThree



// Object Shorthand Properties
const fName = 'SAMMY', age = 20, designation = 'developer';

// create a new object { fName: 'SAMMY', age: 20, designation: 'developer' }

const objFour = { fName: fName, age: age, designation: designation }; // normal approach
console.log(objFour);

const objFive = { fName, age, designation };
console.log(objFive);


// Template literals

const objSix = { name: 'SAMMY', age: 20, designation: 'developer' };


// print a string Name is SAMMY, Age is 20, Designation is developer

console.log('Name is ' + objSix.name + ' Age is ' + objSix.age + ', Designation is ' + objSix.designation);

console.log(`Name is ${objSix.name}, Age is ${objSix.age}, Designation is ${objSix.design}`);

// Rest Operator

function func(a, b, c, d, e, f) {

  console.log(a, b, c, d, e, f);

}

func(1, 2, 3, 4, 5, 6);


function funcTest(a, b, c, ...args) {

  console.log(a, b, c);
  console.log(args);
}

funcTest(1, 2, 3, 4, 5, 6);

// rest in Object
const objSeven = { a: 1, b: 2, c: 3 };

const { a, ...rest } = objSeven;

console.log(a);
console.log(rest);


// rest in Array

const arrSeven = [1, 2, 3, 4, 5, 6];

const [n, ...restArr] = arrSeven;

console.log(n);
console.log(restArr);

