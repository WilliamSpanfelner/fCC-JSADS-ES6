// Use getters adn setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;  // the _ signifies a private variable, but the variable remains public
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }   
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// getters and setters are important to hide implementation details.

// Create a Thermostat class.
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this.celsius = (fahrenheit - 32) * 5 / 9;
    }
    get temperature() {
        return `${this.celsius} in Celsius`;
    }
    set temperature(celsius) {
        this.celsius = celsius;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

const myThermos = new Thermostat(212);
let myTemp = myThermos.temperature;
console.log(myTemp);  // 100 in Celsius
myThermos.temperature = 0;
myTemp = myThermos.temperature;
console.log(myTemp);  // 0 in Celsius

// Convert Celsius to Kelvin
class ThermostatCK {
    constructor(celsius) {
        this.celsius = celsius
    }
    get temperature() {
        return `${this.celsius}℃ is ${this.celsius + 273.15}K`
    }
    set temperature(celsius) {
        this.celsius = celsius
    }
}

const convertCK = new ThermostatCK(0);
let tempCK = convertCK.temperature;
console.log(tempCK);
convertCK.temperature = -273.15;
tempCK = convertCK.temperature;
console.log(tempCK)