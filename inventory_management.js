// TASK 1 - Create an Inventory Array of Product Objects

let inventory = [
    {name: "food", price: 45, quantity: 20, lowStockLevel: 5},
    {name: "collar", price: 15, quantity: 30, lowStockLevel: 5},
    {name: "leash", price: 10, quantity: 10, lowStockLevel: 5},
    {name: "brush", price: 8, quantity: 4, lowStockLevel: 5},
    {name: "ball", price: 12, quantity: 50, lowStockLevel: 5},
]; // An array of pet store products.


// TASK 2 - Create a Function to Display Product Details

function displayProductDetails(inventory) {
    const stockStatus = inventory.quantity <= inventory.lowStockLevel ? "Low Stock" : "In Stock";
    return `Product Name: ${inventory.name}
            Price: $${inventory.price}
            Currently In Stock: ${inventory.quantity}
            Stock Status: ${stockStatus}`
} // Function to determine whether a product is in stock, and displays it in the console.console.log(displayProductDetails(inventory.food);

// console.log(displayProductDetails[0]); // Output should display details for "food".


// TASK 3: Create a Function to Update Product Stock After Sales

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold;
    if (inventory.quantity <=0) {
        return "Out of Stock."
    } else if (inventory.quantity <= inventory.lowStockLevel) {
        return `Low Stock. New quantity: ${inventory.quantity}.`
    } else {
        return `In Stock. New quantity: ${inventory.quantity}.`
    }
} // Updates the quantity in stock and returning the new quantity.

// console.log(updateStock(inventory[0], 15)); // Output should display the new quantity and stock status.


// TASK 4: Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].quantity < inventory[i].lowStockLevel) {
            console.log(inventory[i].name + " stock is low.");
        };
    };
}; // for loop because forEach wasn't working. Checks if quantity is lower than low stock level.

// console.log(checkLowStock(inventory)); // Output: brush stock is low.


// TASK 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventory) {
    inventory.reduce((price, quantity) => (price * quantity), 0);
};

console.log(calculateInventoryValue(inventory));