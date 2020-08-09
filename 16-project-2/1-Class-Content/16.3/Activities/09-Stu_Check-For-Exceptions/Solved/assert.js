var assertThrows = function (func, x, y) {
  var threw = false;

  // Try to execute func with x, y
  try {
    // multiply(2, "2")
    func(x, y);
  }
  catch (err) {
    // If func throws set threw to false and log the error
    // Since the error was caught, it doesn't crash our program
    threw = true;
    console.log(err);
    alert('Invalid input')
  }finally{
    alert('Thanks playing. Run the application to keep playing')
  }
  // Return threw
  return threw;
};

var multiply = function(x, y) {
  // If either x or y is not a number, throw an error
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Either x or y is not a number. Please try again with numbers.");
  }
  // Otherwise return the result of x * y
  else return  console.log(x * y);
};

// Throws an error
console.log(assertThrows(multiply, 2, "2"));

// No error thrown below
// assertThrows(multiply, 2, 2);
