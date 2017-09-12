// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const veggies = {"Tomato": .50, "Onion": .10, "Lettuce": .15, "Banana-Peppers": .40};


maker.getVeggies = function() {
		return veggies;
	};

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});