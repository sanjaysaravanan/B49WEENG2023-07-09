// Hoisting

console.log(x);

var x = 100;

console.log(x);


test();


function test() {
  console.log(x);
}

// Copy by value
var a = 100;
var b = 99;

console.log('a: ' + a);
console.log('b:' + b);

function sample(a, b) {
  a = 88;
  b = 77;
}

sample(a, b);

console.log('a:' + a);
console.log('b:' + b);


// Copy by reference
var obj = {
  a: 100,
  b: 99
}

console.log('a:' + obj.a);
console.log('b:' + obj.b);

function sampleTest(objTemp) {
  objTemp.a = 88;
  objTemp.b = 77;
}

sampleTest(obj);

console.log('a:' + obj.a);
console.log('b:' + obj.b);


// Http request
// xmlhttprequest js object which connects to internet

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'https://restcountries.com/v3.1/all');

httpRequest.send();

httpRequest.onload = function () {
  const resText = httpRequest.responseText; // string which contains json
  console.log(resText);
  // convert string to js object
  const countries = JSON.parse(resText);

  console.log(countries);

  for (let counttry of countries) {
    console.log(counttry.name);
  }
}

