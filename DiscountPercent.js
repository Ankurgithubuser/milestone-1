let PercentOfDiscount=(product)=>{
    let discount = 100-(product.discountprice/product.orginalprice)*100;
    return discount.toFixed(2);

}
let product1={orginalprice:499,discountprice:399}
let discount=PercentOfDiscount(product1)
console.log(`discount=${discount}%`);