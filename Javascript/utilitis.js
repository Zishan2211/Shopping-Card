// Case Function

function UpdateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-filed');
    const caseNumberString = caseNumberFiled.value;
    const privousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = privousCaseNumber + 1;
    }
    else {
        newCaseNumber = privousCaseNumber - 1;
    }

    caseNumberFiled.value = newCaseNumber;

    return newCaseNumber;

}

// Phone Function

function UpdatePhoneNumber(isIncrease) {
    const phoneNumberFiled = document.getElementById('Phone-filed');
    const PhoneNumberString = phoneNumberFiled.value;
    const privousPhoneNumber = parseInt(PhoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = privousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = privousPhoneNumber - 1;
    }

    phoneNumberFiled.value = newPhoneNumber;

    return newPhoneNumber;

}




function getCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('Total-Caseprice');
    caseTotalElement.innerText = caseTotalPrice;
}

function getPhoneTotalPrice(newPhoneNumber) {
    const phoneTotalprice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('Total-PhonePrice');
    phoneTotalElement.innerText = phoneTotalprice;
}


// Calculate Total

function CurrentTotalPrice(ElementId) {
    const phoneTotalElementprice = document.getElementById(ElementId);
    const CurrentTotalPriceString = phoneTotalElementprice.innerText;
    const currentPhoneTotal = parseInt(CurrentTotalPriceString);

    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = CurrentTotalPrice('Total-PhonePrice');
    const currentCaseTotal = CurrentTotalPrice('Total-Caseprice');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

     
    // calculate tax

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    const fainalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', fainalAmount);

}




