
const validPin = 1234;
// function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValues = inputField.value;
    const inputFieldValuesNumber = parseInt(inputFieldValues);
    return inputFieldValuesNumber
}

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValues = inputField.value;
    return inputFieldValues
}
// function to get inner text
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber
}
// function to set innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance");
    availableBalanceElement.innerText = value
}
// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}
// add money features start
document.getElementById("add-money-btn")
.addEventListener("click", function(e){
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");

    if(accountNumber.length < 11){
        alert("Please provide valid account number");
        return
    }
    if(pin !== validPin){
        alert("Please provide a valid PIN");
        return
    }

    const totalNewAvailableBalance = availableBalance + amount
    setInnerText(totalNewAvailableBalance);
})
// add money features end

// cashout features start
document.getElementById("withdraw-btn")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");
    const cashPin = getInputValueNumber("cash-pin");
    const agent = getInputValue("agent");
    if(agent.length < 11){
        alert("plese provide a valid agent number");
        return
    }
    if(cashPin !== validPin){
        alert("plese provide a valid pin")
        return
    }
    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance)
    
})
// cashout features end

// toggling feature start
document.getElementById("add-button")
.addEventListener("click", function(){
    handleToggle("add-money-parent")
})
document.getElementById("cash-out-button")
.addEventListener("click", function(){
    handleToggle("cash-out-parent")
})
document.getElementById("transfer-button")
.addEventListener("click", function(){
    handleToggle("transfer-money-parent")
})
document.getElementById("bonus-button")
.addEventListener("click", function(){
    handleToggle("get-bonus-parent")
})
// toggling feature end

