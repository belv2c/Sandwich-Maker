// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
	const meat = {"Turkey": 2.00, "Bacon": 1.00, "Ham": 1.50, "Roast-Beef": 1.75};


 maker.getMeat = function() {
		return meat;
	};

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});