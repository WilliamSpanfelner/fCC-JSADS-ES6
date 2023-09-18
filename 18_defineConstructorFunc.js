// Use class Syntax to Define a Constructor Function
/* 
ES6 introduces a constructor method invoked with the new keyword.
If the constructor method is not explicitly defined, then it is 
implicitly defined with no arguments.
*/
// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}
// Implicit constructor
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
zeus.takeOff();  // prints To Jupiter! in console

const atlas = new Rocket();
atlas.launch();  // prints To the moon! in console