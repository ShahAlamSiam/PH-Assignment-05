document.getElementById('btn-donate-quota').addEventListener('click', function(){

    const myCurrentBalance = balance('myBalance');
    const collectedAmount3 = donatedAmount('collectedAmountQuota');
    const donateMoney3 = getInputValueById('input-amount-quota');

        if(isNaN(donateMoney3)){
            return;
        }else{
            if(myCurrentBalance<donateMoney3){
                alert('Not Enough Balance!!')
                return;
            }

            const quotaFund = donateMoney3+collectedAmount3;
            const currentBalance3 = balance('myBalance') - donateMoney3;
        
            document.getElementById('collectedAmountQuota').innerText = quotaFund;
            
            document.getElementById('myBalance').innerText = currentBalance3;
        }
})