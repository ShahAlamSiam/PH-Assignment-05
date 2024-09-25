document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const myCurrentBalance = balance("myBalance");
    const collectedAmount3 = donatedAmount("collectedAmountQuota");
    const donateMoney3 = getInputValueById("input-amount-quota");

    if (isNaN(donateMoney3)) {
      return;
    } else if (myCurrentBalance < donateMoney3) {
      alert("Not Enough Balance!!");
      return;
    }

    const quotaFund = donateMoney3 + collectedAmount3;
    const currentBalance3 = balance("myBalance") - donateMoney3;

    document.getElementById("collectedAmountQuota").innerText = quotaFund;

    document.getElementById("myBalance").innerText = currentBalance3;

    //history

    const timeZone = new Date().toString();

    const titleQuota = document.getElementById("titleQuota").innerText;
    const div = document.createElement("div");
    div.classList.add(
      "bg-gray-200",
      "w-10/12",
      "px-5",
      "py-6",
      "mb-10",
      "mx-auto",
      "shadow-2xl",
      "items-center",
      "text-center"
    );

    div.innerHTML = `
                                         <h1 class="text-2xl font-semibold">
                                         ${donateMoney3} BDT is Donated for ${titleQuota};
                                         </h1>

                                         <p class="text-lg">
                                         ${timeZone}</p>
                                    `;
    document.getElementById("history").appendChild(div);
  });
