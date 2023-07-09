function test() {

  return 9999; // function will get exited immediately after return

  console.log('Testing');
}

test();


// create a single function for calculating the areas

// it has to calculate areas of any shapes
// eg: 
// reactangle ( l, b )
// triangle (l, b, h)
// circle ( r )
// square ( r )

// it has to known for which shape it is calculating area
// first parameter ---> type ( reactangle, triangle, circle, square )


/**
 * calculate the area of any given shape
 * @param x --> length of rectangle 
 *  or height of triangle 
 *  or radius of a circle 
 *  or sides of square
 * 
 * @param y --> breadth of rectangle
 *  or base of a triangle 
 */
function calculateArea(type, x, y) {
  switch (type) {
    case 'reactangle':
      return x * y;
    case 'triangle':
      return x * y / 2;
    case 'circle':
      return Math.PI * x * x;
    case 'square':
      return x * x;
    default:
      return 0;
  }
}

// reactangle
calculateArea('reactangle', 100, 200);
// circle
calculateArea('circle', 5);
// triangle
calculateArea('triangle', 2, 2);


// Types of functions

// Named function
// with parameters/arguments or without parameters/arguments
function sample() {
  console.log('sample');

  return 'Sample function';
}

sample();

// anonymous function use this as value in rhs/assignments  
// function value assignment 
// function expression
// this won't be hosited
let funcTest = function () {
  console.log('another function');
}

funcTest();

// IIFE ---> Immediately Invoked Function Expression
// this won't be hosited
(function funcIIFE() {
  console.log('IIFE function');
})();




// Arrow Functions
// this cannot be hoisted
// this will be used throughout the course
const arrowFunc = () => {
  console.log('arrow function');
  return 'Arrow function';
}

arrowFunc();

const arrowFuncParam = (type) => {
  console.log('arrow function', type);
  return 'Arrow function';
}

arrowFuncParam('Arrow function with parameters'); 
