var name = 'blake';
const stateTotal = 50;
let sum = 4 + 5;
// adding comments for functionality
function sayHello() {
    alert('Hello World')
}
sayHello();
function checkAge(personName, personAge) {
    if (personAge < 21) {
        alert("Sorry " + personName + ", you aren't old enough to view this page!")
    }
}

checkAge('Charlie', 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favVeg = ["tomatoe", "Squash", "Potatoe"];

let petObj = {
    name: "buddy",
    breed: "Ratterrier"
}

console.log(petObj.name + " " + petObj.breed);

let arrObj = [{
    name: "buddy",
    age: 23
}, {
    name: "willy",
    age: 52
}, {
    name: "susan",
    age: 13
}, {
    name: "tommy",
    age: 21
}, {
    name: "whoever",
    age: 15
}
]

for (let id = 0; id < arrObj.length; id++) {
    let element = arrObj[id];
    checkAge(element.name,element.age);
    
}

function getLength(check){
    let checkLength = check.length;
    if(checkLength%2){
        console.log('The world is an odd place!')
    } else {
        console.log('The world is an nice and even!!')
    }
}

getLength('Hi');