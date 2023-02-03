const cart =[
    { name : 'shoe', price : 1200, quantiy: 5 },
    { name : 'shirt', price : 1600, quantiy: 3},
    { name : 'pant', price : 1300, quantiy: 2 },
    { name : 'belt', price : 100, quantiy: 5 },
    { name : 'shock', price : 200, quantiy: 6 },
];

function totallCost (products){
    let sum = 0;
    for (i=0; i<products.length; i++){
        const product = products [i]
        let prot 
        sum = sum + product.price * product.quantiy
        console.log(product);
    }
    return sum
}
const expense = totallCost (cart);
console.log('totall koroch: ', expense);