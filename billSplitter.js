function CalculateTotalBill(costofdish,numberofpeople) {
    let totalBill=0;

    for (let item of costofdish ) {
        totalBill += item; 
    }
    let amountperhead = totalBill/numberofpeople;
    return {totalBill:totalBill,amountperhead:amountperhead}
}
let costofdish =[50,100,139,150];
let numberofpeople =4;
let SplitBill =CalculateTotalBill(costofdish,numberofpeople)
console.log(SplitBill);