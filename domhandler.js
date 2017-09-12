console.log("domhandler");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold the final sandwich.
var finalSandwichProduct = document.getElementById("final-sandwich");
var totalCost = document.getElementById("final-cost");
var submitButton = document.getElementById("submit");

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
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${myBread[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= myBread[key];  
  }
 }
});

meatChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myMeat){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice += myMeat[key];
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${myMeat[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= myMeat[key];
  }
 }
});

cheeseChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myCheese){
   if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice += myCheese[key];
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${myCheese[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= myCheese[key];
  }
 }
});

condimentChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myCondiments){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice += myCondiments[key];
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${myCondiments[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= myCondiments[key];
  }
 }
});

veggieChooser.addEventListener("change", function(event){
  selectedTopping = event.target.value;
  for (let key in myVeggies){
    if(selectedTopping === key && event.target.checked) {
      finalSandwichPrice += myVeggies[key];
      totalCost.innerHTML = `$${finalSandwichPrice}`;
      finalSandwichProduct.innerHTML += `<p id="${key}">$${myVeggies[key]} ${key}</p>`;
    } else if(selectedTopping === key && event.target.checked === false) {
      finalSandwichPrice -= myVeggies[key];
  }
 }
});



