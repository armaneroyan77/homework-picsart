// Given products, return ones with price > 1000.

const Products = [

    {product: "phone", price: 3000},
    {product: "laptop", price: 1100},
    {product: "beg", price: 490},
    {product: "book", price: 300},
    
]

const expensiveProducts = Products.filter(p => p.price > 1000);
console.log(expensiveProducts);

