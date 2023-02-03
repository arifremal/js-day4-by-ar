function ticketPrice (ticketQuantity){
    const first = 100;
    const second = 90;
    const rest = 70;
    if ( ticketQuantity<= 100){

        const price = first * ticketQuantity
        return price
    }

    else if ( ticketQuantity <=200 ){
        const first100 = first * 100;
        const resticket = ticketQuantity-100;
        const resticketPrice = resticket *second;
        const resticketTotall = first100 + resticketPrice
        return resticketTotall
    } else{
        const first100price = 100* first;
        const second100price = 100* second;
        const restticketwuantity = ticketQuantity - 200;
        const resticketPrices = restticketwuantity * rest;
        const totallCoast=  first100price + second100price + resticketPrices;
        return totallCoast
    }

} 

const result = ticketPrice (220);
console.log(result);