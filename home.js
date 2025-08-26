
const validPin = 1234;
const transectionData = [];
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
// function to toggle active
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn");
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
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
    if(amount <= 0){
        alert("Invalid amount")
        return
    }

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
    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data);
    console.log(transectionData)
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
    if(amount > availableBalance || amount <= 0){
        alert("Invalid amount")
        return
    }
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
    const data = {
        name: "Cashout",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    console.log(transectionData)
})
// cashout features end

// transection feature start
    document.getElementById("transections-button")
    .addEventListener("click", function(){
        const transactionContainer = document.getElementById("transaction-container");
        transactionContainer.innerHTML = " ";
        for(const data of transectionData){
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="flex justify-between items-center  bg-white rounded-xl p-3 mb-3">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" alt="">
          </div>
          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
            
            `
            transactionContainer.appendChild(div)
        }
    })
// transection feature end

// toggling feature start
document.getElementById("add-button")
.addEventListener("click", function(){
    handleToggle("add-money-parent")
    handleButtonToggle("add-button")
    
})
document.getElementById("cash-out-button")
.addEventListener("click", function(){
    handleToggle("cash-out-parent")
    handleButtonToggle("cash-out-button")
    
})
document.getElementById("transfer-button")
.addEventListener("click", function(){
    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-button")
    

})
document.getElementById("bonus-button")
.addEventListener("click", function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-button")
})
document.getElementById("bill-button")
.addEventListener("click", function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-button")
})
document.getElementById("transections-button")
.addEventListener("click", function(){
    handleToggle("transections-parent")
    handleButtonToggle("transections-button")
})
// toggling feature end

