const phone = [
    {
        name: 'samsun',
        camere: 12,
        Storage : '32gb',
        price : 2300,
        color: 'red'
        
    },
    {
        name: 'Apple',
        camere: 14,
        Storage : '12gb',
        price : 2800,
        color: 'red'
        
    },
    {
        name: 'walton',
        camere: 11,
        Storage : '2gb',
        price : 300,
        color: 'red'
        
    },
    {
        name: 'samsun',
        camere: 12,
        Storage : '32gb',
        price : 2300,
        color: 'red'
        
    }
];

function chepphone (phones){
    let chepest = phones[0]
for (i=0; i<phones.length; i++){
    const phone = phones[i]
    if(phone.price <chepest.price ){
        chepest = phone
    }
}
return chepest;
}
const myphone = chepphone(phone)
lo
