// Use Destructuring Assignment to Assign Variables from Objects
const user = { name: 'John Doe', age: 34 };

// Give new names as follows:
const { name: userName, age: userAge } = user;

// Rename vars with destructuring
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today: highToday, tomorrow:  highTomorrow } = HIGH_TEMPERATURES; 
  
  // Only change code above this line