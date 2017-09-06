console.log("veggies");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const veggiePrices = {"Tomato": .50, "Onion": .10, "Lettuce": .15, "Peppers": .40};


  // Augment the original object with another method
  maker.addVeggies = function() {
   /* return ???;*/
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});