var dog = "thirsty"
 
if (dog === "hungry") {
  console.log("Refilling food bowl.")
} else if (dog === "thirsty") {
  console.log("Refilling water bowl.")
} else {
  console.log("Reading newspaper.")
}

if (6 + 3 > 5) {
  console.log("The hummingbird is the only animal that can fly backwards")
}

var dog = "cuddly"
 
if (dog === "hungry") {
  console.log("Refilling food bowl.")
 
} else if (dog === "thirsty") {
  console.log("Refilling water bowl.")
 
} else if (dog === "playful") {
  console.log("Playing tug-of-war.")
 
} else if (dog === "cuddly") {
  console.log("Snuggling.")
 
} else { 
  console.log("Reading newspaper.")
}

function sayHelloToIsabel() {
  console.log("Hello, Isabel!")
}

function doSomething(thing) {
  console.log('This functions states: ' + thing)
}
 
 function greet (firstName, greeting) {
 console.log(greeting +", "+ firstName);
   return `${greeting}, ${firstName}!`
 }
 
doSomething('anything')