// Variable to hold the final price. Default to 0.
let finalSandwichPrice = 0;

// Variable to hold the final sandwich.
let finalSandwichProduct = document.getElementById("final-sandwich");

//Variable to hold price in HTML
let totalCost = document.getElementById("final-cost");

// Variable to hold topping that the user selects
let selectedTopping;

// Get a reference to the <select> elements that have all the ingredient options
let breadChooser = document.getElementById("bread-chooser");
let meatChooser = document.getElementById("meat-chooser");
let cheeseChooser = document.getElementById("cheese-chooser");
let condimentChooser = document.getElementById("condiment-chooser");
let veggieChooser = document.getElementById("veggie-chooser");


breadChooser.addEventListener("change", (event) =>{
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

meatChooser.addEventListener("change", (event) =>{
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

cheeseChooser.addEventListener("change", (event) =>{
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

condimentChooser.addEventListener("change", (event) =>{
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

veggieChooser.addEventListener("change", (event) =>{
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



