var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

/*  Hint: Remember that variables declared inside a function are within the function's scope. */

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  var animal = `cat`
  return animal
}

function add2(n) {

  // Feel free to move things around!
  const two = 2
  return n + two
}

function funkyFunction() {
  return function() {
    return ("FUNKY!")
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()

/* Remember the purpose of using () is to call functions in JavaScript. It essentially tells our code to execute the function. A function called without a () (i.e. functionName instead of functionName()), will return the function definition but NOT run it. You'll see the return value as [Function: functionName].

To get our code to execute that function, we instead call functionName(), which executes the code within that function.  */