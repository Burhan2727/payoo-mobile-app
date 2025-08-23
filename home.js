// add money features start
const validPin = 1234;
document.getElementById("add-money-btn")
.addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if(accountNumber.length < 11){
        alert("Please provide valid account number");
        return
    }
    if(pin !== validPin){
        alert("Please provide a valid PIN");
        return
    }

    const totalNewAvailableBalance = availableBalance + amount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    console.log(totalNewAvailableBalance)
})
// add money features ebd

// cashout features start
document.getElementById("withdraw-btn")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = parseInt(document.getElementById("withdraw-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const cashPin = parseInt(document.getElementById("cash-pin").value);
    const agent = document.getElementById("agent").value;
    if(agent.length < 11){
        alert("plese provide a valid agent number");
        return
    }
    if(cashPin !== validPin){
        alert("plese provide a valid pin")
        return
    }
    const totalNewAvailableBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    
})
// cashout features end

// toggling feature start
document.getElementById("add-button")
.addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button")
.addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})
// toggling feature end

