var jhonheight = 168;
var doeheight = 160;
var jhonage = 28;
var doeage = 25;

var jhonScore = jhonheight + 5 * jhonage;
var doeScore = doeheight + 5 * doeage;

if(jhonScore > doeScore) {
    console.log("Jhon wins the game with "+ jhonScore + "points");
}
else if (doeScore > jhonScore) {
    console.log("Doe wins the game with "+ doeScore + "points");
}
else if (jhonScore === doeScore) {
    console.log("Mathch Draw!!!");
}



/**
 *Functions
 */

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}
//calculateAge(1989); //28

function retirementinYears(name, year) {
    var years = calculateAge(year);
    var retirement = 65 - years;
    if (retirement >= 0) {
        console.log(name +" retires in "+ retirement +" years");
    }
    else {
        console.log(name +" has already retired.");
    }
}

retirementinYears("sri",1989);
retirementinYears("Muniswamy",1949);

/**
 * Statement is meant to do something from some inputs. For instance if(x===1){//do something}
 * Expressions are to produce some results. For instance var x = 3+3;  
 */
function statement() {
    // Do stuff here
}

var expression = function(params) {
    // Do stuff here
}


/**
 * Arrays
 */

var names = ['Sri','Ashok','Madhu'];
names.push("Praveen");
names.pop();
names.unshift("Pradeep");
names.shift();

console.log(names);

/**
 * Objects - Key and value Pairs
 */

// Common way of writing Objects are object literal

var person = {
    name : 'Sri',
    lastName : 'Sri',
    yearOfBirth: 1989,
    job: 'Engineer',
    isMarried: true
};
person['job'] = "Designer";
console.log(person);
console.log(person['name']);

var anotherPerson = new Object();
anotherPerson.name = "Srisri";
anotherPerson.age = 28;
anotherPerson['job'] = "Engineer";

 console.log(anotherPerson)