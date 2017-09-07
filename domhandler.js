console.log("domhandler");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold the final sandwich.
var finalSandwichProduct = document.getElementById("final-sandwich");

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> elements that have all the ingredient options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");


/*for (var j = 0; j < finalSandwichProduct.length; j++) {
  finalSandwichProduct[j].addEventListener("click", setSelectedTopping);
}
*/
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("");
  console.log(event);



  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});