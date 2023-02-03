const cart =[
    { name : 'shoe', price : 1200 },
    { name : 'shirt', price : 1600 },
    { name : 'pant', price : 1300 },
    { name : 'belt', price : 100 },
    { name : 'shock', price : 200 },
];

function totallCost (products){
    let sum = 0;
    for (i=0; i<products.length; i++){
        const product = products [i]
        sum = sum + product.price
        console.log(product);
    }
    return sum
}
const expense = totallCost (cart);
console.log('totall koroch: ', expense);