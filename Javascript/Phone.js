document.getElementById('phone-btn-plus').addEventListener('click',function(){
    const newPhoneNumber = UpdatePhoneNumber(true);
    getPhoneTotalPrice(newPhoneNumber);

    // calculate Total
    calculateSubTotal();
    
})

document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const newPhoneNumber = UpdatePhoneNumber(false);
    getPhoneTotalPrice(newPhoneNumber);

    // calculate Total
    calculateSubTotal();
})