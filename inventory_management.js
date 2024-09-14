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