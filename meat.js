console.log("meat");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const meatPrices = {"Turkey": 2.00, "Bacon": 1.00, "Ham": 1.50, "Beef": 1.75};



  // Augment the original object with another method
  maker.addMeat = function() {
   /* return ???;*/
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});