// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiverse() {
  const multiverseInfo = "I contain an infinite amount of universe";

  function someUniverse() {
    const someUniverseInfo = "I contain hundreds of billions of galaxies";

    function milkyWay() {
      const milkyWayInfo = "I contain tens of billions of solar systems";

      // I would continue, but I'm keeping it simple :)
    }
  }
}


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let initial = 0;
  return function() {
    return initial++;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  initial = 0;
  let counterObject = {};

  return counterObject = {
    "increment": function() {
      return ++initial;
    },
    "decrement": function() {
      return --initial;
    }
  }
};

let newCounter = counterFactory();
