//Destructuring Assignment
//You can use destructuring assignment to quickly "pluck" values out from an array or object and assign them into a named variable.

//Without Destructuring Assignment:

/*

// This first example is not runnable. Users.GetAll is a hypothetical function that returns an array of users.
let users = Users.GetAll();
let firstUser = users[0];

// Second Example
let choices = ['A', 'D'];
let primaryChoice = choices[0];

// Third Example
let choices = ['A', 'D'];
let primaryChoice = choices[0];
let secondaryChoice = choices[1];

// Fourth Example
function confirmChoices(choices) {
    console.log(`You have chosen ${choices[0]} as your primary choice and ${choices[1]} as your secondary choice.`);
}

confirmChoices(['B', 'C']);
*/

//With Destructuring Assignment:

// This first example is not runnable. Users.GetAll is a hypothetical function that returns an array of users.
/*
let [firstUser] = Users.GetAll();

// Second Example
let choices = ['A', 'D'];
let [primaryChoice] = choices;

*/

// Third Example
let choices = ['A', 'D'];
let [primaryChoice, secondaryChoice] = choices;

// Fourth Example
function confirmChoices([primaryChoice, secondaryChoice]) {
    console.log(`You have chosen ${primaryChoice} as your primary choice and ${secondaryChoice} as your secondary choice.`);
}

confirmChoices(['B', 'C']);

//With Objects

let p1 = {
    name: 'Jason',
    age: 27,
    email: 'test@test.com'
};

// sometimes we only care about one piece of info, and that's all we care to destructure out of the object:
let { name } = p1;
console.log(name); // 'Jason'

// Order doesn't matter when destructuring!
// The variable names you are choosing in the destructuring group (left side) coincide with the property names in object p1 of which you want to "pluck" the values
let { email, age } = p1;
console.log(email); // 'test@test.com'
console.log(age); // 27

// You can also destructure a property and choose a different name for the variable:
let { name: studentName } = p1;
console.log(studentName); // 'Jason'

function sayHello({ name, age }) {
    console.log(`Congratulations ${name}! You've been around for ${age} years!`);
}

sayHello(p1);
// Congratulations Jason! You've been around for 27 years!

//Array.every()
//The every() method is available on all Arrays. It is used to test whether all the items in an array pass a specified test. The test is performed by executing a function that you pass into the every() method for every item in the Array.

const oldEnough = [21, 25, 23, 21, 22, 24];
const notOldEnough = [21, 25, 23, 21, 17, 24];

function is21OrOver(age) {
    return age >= 21;
}

console.log(oldEnough.every(is21OrOver)); // true
console.log(notOldEnough.every(is21OrOver)); // false