// camelCase

// PascalCase

// kebab-case

// snake_case


function greet() {
    console.log("Hello there!");
}

greet ();

function greetWithName(name) {
    console.log(`hello ${name}`);
}

greetWithName("jai");

function add(a,b) {
    console.log(a+b);
}

add(5,3);

// let a = parseInt(prompt("a:"));
// let b = parseInt(prompt("b:"));

// sub(a,b);

function sub (a,b) {
    console.log(a-b);
}

function sqrt (number) {
    return number*number;
}



result = sqrt(6);

console.log(result);


// global scope 

// local scope

let a = "hello";

function greeting () {
    let b = "world"; 
    console.log(a);
    console.log(a+" "+b);

    if (true) {
        let c = "bye";
        console.log(c);
        console.log(b);
    }
    
    // console.log(c);
} 

console.log(a);
// console.log(b);

greeting(a);

console.log(test);
var test;

var test2;
console.log(test2);

test3 = 5;
console.log(test3);
var test3;

console.log(test4);
var test4 = 5;


function countDown (number) {
    console.log(number);

    number = number - 1;

    if (number > 0) {
        countDown (number);
    }
}

countDown(10);