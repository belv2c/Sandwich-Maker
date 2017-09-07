console.log("Sandwich Maker");

var SandwichMaker = (function(maker) {
  // Private variable to store the price
  var totalPrice = 0;
  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      finalSandwichProduct.innerHTML = totalPrice;

    }
  };
  console.log(totalPrice);
})(SandwichMaker || {});

