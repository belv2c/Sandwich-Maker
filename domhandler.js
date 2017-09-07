console.log("domhandler");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold the final sandwich.
var finalSandwichProduct = document.getElementById("final-sandwich");

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> elements that have all the ingredient options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");


/*breadChooser.addEventListener("change", function(event){
	if(event.target.checked === true) {
		selectedTopping.getBread(e.target.value);
		}
})*/
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
/*breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
	/*function selectBread(event){*/
		/*if (checkbox.checked === true){
			order.push(event.target.value);
		}
		console.log(event);*/
	
/*})

if (selectedTopping[1].classList.contains("box")){
	let bread = SandwichMaker.getBread();
	let breadObj = selectedTopping[1];
	finalSandwichPrice += bread(breadObj);
	finalSandwichProduct.innerHTML += `${breadObj} price`;
	finalSandwichPrice = `${finalSandwichPrice}`;
};*/
  	/**/



  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
/*});*/