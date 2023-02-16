

document.getElementById('case-btn-plus').addEventListener('click',function(){
    const newCaseNumber = UpdateCaseNumber(true);
    getCaseTotalPrice(newCaseNumber);
    // calculate Total
    calculateSubTotal();
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
    const newCaseNumber = UpdateCaseNumber(false);
    getCaseTotalPrice(newCaseNumber);
    // calculate Total
    calculateSubTotal();
})