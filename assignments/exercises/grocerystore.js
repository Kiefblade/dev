var shopper = {
    groceryCart: [
      "Fruits", "Vegetables", "Dairy"
    ],
    name: "Luke",
    budget: 200,
    isHungry: true,
    getGroceries: function() {
      console.log("Items in cart: " + shopper.groceryCart[1]);
      console.log("Budget: " + shopper.budget);
      console.log("Is shopper always hungry? " + shopper.isHungry);
    }
}
shopper.getGroceries();
