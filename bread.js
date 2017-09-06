console.log("breads");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
	const breadPrices = {"Wheat": 1.00, "Sourdough": 1.50, "Rye": 1.25, "White": .50};


  // Augment the original object with another method
  maker.addBread = function() {
    /*return ???;*/
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});