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
  		finalSandwichPrice = myBread[key];
  		console.log(finalSandwichPrice);
  		console.log(event.target.value);
    }
   }
})


meatChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myMeat){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice = myMeat[key];
      console.log(finalSandwichPrice);
      console.log(event.target.value);
    }
  }
})

cheeseChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myCheese){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice = myCheese[key];
      console.log(finalSandwichPrice);
      console.log(event.target.value);
    }
  }
})

condimentChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myCondiments){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice = myCondiments[key];
      console.log(finalSandwichPrice);
      console.log(event.target.value);
    }
  }
})

veggieChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myVeggies){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice = myVeggies[key];
      console.log(finalSandwichPrice);
      console.log(event.target.value);
    }
  }
})

