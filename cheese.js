console.log("cheese");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const cheesePrices = {"American": .50, "Cheddar": .75, "Mozz": .30, "Swiss": .40};

  // Augment the original object with another method
  maker.addCheese = function() {
  /*  return ???;*/
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});