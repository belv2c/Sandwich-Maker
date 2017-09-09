console.log("condiments");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const condiments = {"Ketchup": .20, "Mayo": .10, "BBQ": .10, "Mustard": 0.01};

maker.getCondiments = function() {
		return condiments;
	};

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});