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


breadChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myBread){
  	if(selectedTopping === key && event.target.checked) {
  		finalSandwichPrice += myBread[key];
  		console.log(finalSandwichPrice);
  		console.log(event.target.value);
  }
    }
   })


meatChooser.addEventListener("change", function(event){
  if(event.target.checked === true) {
    /*selectedTopping.getBread(e.target.value);*/
    console.log("meat");
    }
})

cheeseChooser.addEventListener("change", function(event){
  if(event.target.checked === true) {
    /*selectedTopping.getBread(e.target.value);*/
    console.log("cheese");
    }
})

veggieChooser.addEventListener("change", function(event){
  if(event.target.checked === true) {
    /*selectedTopping.getBread(e.target.value);*/
    console.log("veggies");
    }
})

condimentChooser.addEventListener("change", function(event){
  if(event.target.checked === true) {
    /*selectedTopping.getBread(e.target.value);*/
    console.log("condis");
    }
})
