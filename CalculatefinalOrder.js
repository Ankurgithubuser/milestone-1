let calculateFinalOrderprice=(cart)=>{
    let totalcost =0;
    for (let i = 0; i < cart.length; i++) {
        
        totalcost +=(cart[i].unitprice*cart[i].quantity);

    }
    return totalcost;
}
let patoto ={unitprice:15,quantity:10};
let tomato={unitprice:20,quantity:15};
let carrot={unitprice:10,quantity:17};

let cart= [patoto,tomato,carrot]
let totalcost = calculateFinalOrderprice(cart);
console.log(totalcost);