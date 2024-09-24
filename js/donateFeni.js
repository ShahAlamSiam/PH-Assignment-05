document.getElementById('btn-donate-feni').addEventListener('click', function(){

    const myCurrentBalance = balance('myBalance');
    const collectedAmount2 = donatedAmount('collectedAmountFeni');
    const donateMoney2 = getInputValueById('input-amount-feni');

        if(isNaN(donateMoney2)){
            return;
        }else{
            if(myCurrentBalance<donateMoney2){
                alert('Not Enough Balance!!')
                return;
            }

            const feniFund = donateMoney2+collectedAmount2;
            const currentBalance2 = balance('myBalance') - donateMoney2;
        
            document.getElementById('collectedAmountFeni').innerText = feniFund;
            
            document.getElementById('myBalance').innerText = currentBalance2;
        }
})