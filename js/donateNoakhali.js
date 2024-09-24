document.getElementById('btn-donate-noakhali').addEventListener('click', function(){

    const myCurrentBalance = balance('myBalance');
    const collectedAmount = donatedAmount('collectedAmountNoakhali');
    const donateMoney = getInputValueById('input-amount-noakhali');

        if(isNaN(donateMoney)){
            return;
        }else{
            if(myCurrentBalance<donateMoney){
                alert('Not Enough Balance!!')
                return;
            }

            const noakhaliFund = donateMoney+collectedAmount;
            const currentBalance = balance('myBalance') - donateMoney;
        
            document.getElementById('collectedAmountNoakhali').innerText = noakhaliFund;
            
            document.getElementById('myBalance').innerText = currentBalance;
        }
})