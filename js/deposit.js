//handle deposit buttun addEventListener

document.getElementById("deposit-btn").addEventListener('click',function(){
//get the ammount deposited
    const depositInput = document.getElementById("deposit-input");
 ///field er moddhe new value ta likha hoi
    const depositAmount = depositInput.value;
    // console.log(depositAmount);
    const depositTotal = document.getElementById("deposit-total");
 const currentDepositAmount=depositTotal.innerText;
//  console.log(currentDepositAmount,depositAmount);
 //agher jotho ammount joma ache + ami abr input a koto ammount dicchi
 const newDepositTotal = parseFloat(currentDepositAmount) + parseInt(depositAmount);
//jpdi akne depositTotal er innerText deposit ammount ditam tahole value update korto na..jeta dbo otai show korbe

    depositTotal.innerText = newDepositTotal;


    //update Balance
    const balanceTotal =document.getElementById("balance-total");
    // console.log(balanceCheck);

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal = parseFloat(balanceTotalText);

const newBalanceTotal = previousBalanceTotal + newDepositTotal;
balanceTotal.innerText = newBalanceTotal;




    //clear the deposit input field

    depositInput.value = '';

    
});

//handle withdraw button event addEventListener

document.getElementById("withdraw-btn").addEventListener('click', function(){
    const withdrawInput = document.getElementById("withdraw-input");

    const withdrawAmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount =withdrawTotal.innerText;
const newWithdrawTotal = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
// console.log(newWithdrawTotal);

withdrawTotal.innerText =newWithdrawTotal;

//update balance 
const balanceTotal =document.getElementById("balance-total");
    // console.log(balanceCheck);

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal = parseFloat(balanceTotalText);

const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
balanceTotal.innerText = newBalanceTotal;


//clear the withdraw input field

withdrawInput.value = '';
})