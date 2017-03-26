// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, groupA];
//
// console.log(final);

function hello(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

console.log(hello(...person));

function greeting(name) {
  console.log('Hi ' + name);
}

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
