console.log("breads");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
	const bread = {"Wheat": 1.00, "Sourdough": 1.50, "Rye": 1.25, "White": .50};
	console.log("Bread Array", bread);

	maker.getBread = function() {
		return bread;
	};




  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});