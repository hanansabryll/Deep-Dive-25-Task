// String Methods
let fullName = "Hanan Sabry";
console.log(fullName);
console.log(fullName.length)

let newFullName = " Hanan Sabry ";
console.log(newFullName.trim())
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

let firstname = newFullName.trim().split()
console.log(firstname);

console.log(fullName.includes("hanan"))

// Array
let fruits = ["apple", "banana", "mango"];
console.log(fruits)

fruits.push("orange")
console.log(fruits)

fruits.unshift("kiwi")
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(fruits.indexOf("mango"))

let upperfruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperfruits)

let fruitsStartingWithB = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'))
console.log(fruitsStartingWithB)

fruits.forEach((fruit, index) => {
  console.log(`fruit ${index + 1} is ${fruit}`);
});

// Math
let randomnum = Math.floor(Math.random() * 10) + 1
console.log("random number between 1 and 10", randomnum)

console.log(Math.round(5.1))
console.log(Math.round(5.6))

console.log(Math.trunc(5.1))
console.log(Math.trunc(5.6))

console.log(Math.floor(5.1))
console.log(Math.floor(5.6))

console.log(Math.ceil(5.1))
console.log(Math.ceil(5.6))

let squareroot = Math.sqrt(64)
console.log(`after the num ${squareroot}`)

console.log(Math.min(3, 8, 20, 1))
console.log(Math.max(3, 8, 20, 1))

// Ternary
let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// object
let person = {
  name: "hanan",
  theage: '18',
  adders: "Cairo",

  contact: {
    phone: "00000",
    email: "hanan@gamil.com",
    //      displayInfo()  {
    //  console.log(`name: ${this.name}`);
    //  console.log(`age: ${this.age}`);
    //  console.log(`addres: ${this.adders}`)
    // },
    displaycontactInfo() {
      console.log(`phone: ${this.phone}`);
      console.log(`email: ${this.email}`);
    },
  },
  displayInfo() {
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.theage}`);
    console.log(`addres: ${this.adders}`)
  }
};
person.displayInfo();
person.contact.displaycontactInfo();

person.adders = "Alexandria , Egypt";
person.displayInfo();

//Destructuring
let { name, theage, contact: { phone } } = person;
console.log(name)
console.log(theage)
console.log(phone)

let [firstfruit, secondfruit] = fruits
console.log(firstfruit)
console.log(secondfruit)

// Speard/Rest 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let allarrys = [...arr1, ...arr2];
console.log(allarrys);

function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(calc(1, 2, 3, 4, 5, 6));


// Template Literal
let myname = "hanan"
let myage = "18"
console.log(`Hello ${myname}, you are ${myage} years old.`)

