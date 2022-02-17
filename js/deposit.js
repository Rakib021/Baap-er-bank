// function doubleIt(num){
//  const result = num *2;
//  return result;
// }
// const double = doubleIt(5);
// console.log(double);


function getInputValue(){
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
       const depositAmount =parseFloat(depositAmountText);
  //clear the deposit input field

  depositInput.value = '';
       return depositAmount;
}






//handle deposit buttun addEventListener
document.getElementById("deposit-btn").addEventListener('click',function(){

    const depositAmount = getInputValue();
    const depositTotal = document.getElementById("deposit-total");
 const currentDepositAmount=depositTotal.innerText;
//  console.log(currentDepositAmount,depositAmount);
 //agher jotho ammount joma ache + ami abr input a koto ammount dicchi
 const newDepositTotal = parseFloat(currentDepositAmount) + depositAmount;
//jpdi akne depositTotal er innerText deposit ammount ditam tahole value update korto na..jeta dbo otai show korbe

    depositTotal.innerText = newDepositTotal;


    //update Balance
    const balanceTotal =document.getElementById("balance-total");
    // console.log(balanceCheck);

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal = parseFloat(balanceTotalText);

const newBalanceTotal = previousBalanceTotal + newDepositTotal;
balanceTotal.innerText = newBalanceTotal;




  

    
});

//handle withdraw button event addEventListener

document.getElementById("withdraw-btn").addEventListener('click', function(){
    const withdrawInput = document.getElementById("withdraw-input");
   const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat( withdrawAmountText)
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount =withdrawTotal.innerText;
const newWithdrawTotal = parseFloat(currentWithdrawAmount) + withdrawAmount;
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