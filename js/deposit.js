function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
       const amountField =parseFloat(amountText);
  //clear the deposit input field
  inputField.value = '';
       return amountField;
}

function updateTotalField(totalFieldId,amountField){
    const totalField = document.getElementById(totalFieldId);
 const currentAmountText=totalField.innerText;
 const currentAmount = parseFloat(currentAmountText);
 totalField.innerText = currentAmount + amountField;
}

function updateBalance(amountField,isAdd){
    const balanceTotal =document.getElementById("balance-total");
     // console.log(balanceCheck);
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
if(isAdd == true)
{
    balanceTotal.innerText = previousBalanceTotal + amountField;
}
else{
    balanceTotal.innerText = previousBalanceTotal - amountField;
}

}

//handle deposit buttun addEventListener
document.getElementById("deposit-btn").addEventListener('click',function(){
    const amountField = getInputValue("deposit-input");
    updateTotalField("deposit-total",amountField);
    updateBalance(amountField,true);
}); 
document.getElementById("withdraw-btn").addEventListener('click', function(){
const amountField = getInputValue("withdraw-input");
    updateTotalField('withdraw-total',amountField);
    updateBalance(amountField,false);
})