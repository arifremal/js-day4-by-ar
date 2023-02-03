const country = 'bangladesh';
const age = 90;
const is = true;
const student = {
    id: 12,
    class : 4,
    name: 'arif'
}
const friends = [12,67,7,7,7,9];

function add(num1,num2) {
    return num1+num2
    
}


console.log( typeof country);
console.log( typeof age);
console.log( typeof is);
console.log( typeof student);
console.log( Array.isArray(friends) );
console.log( typeof add);
console.log(friends.includes(12));

const gf = [12,67,90,80]

const all = gf.concat(friends)
console.log(all);