console.log("cheese");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const cheese = {"American": .50, "Cheddar": .75, "Mozz": .30, "Swiss": .40};

 maker.getCheese = function() {
		return cheese;
	};

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});