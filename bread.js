console.log("breads");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
	const bread = {"Wheat": 1.00, "Sourdough": 1.50, "Rye": 1.25, "White": .50};
	console.log("Bread Array", bread);
	

	  // Augment the original object with another method

	/*  maker.addBread = function(currentBread){
	  	return bread(currentBread);
	  };	*/

	maker.getBread = function() {
		return bread;
	};

	maker.addEventListener = function(event) {
		console.log(event);
	}


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});