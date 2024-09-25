document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const myCurrentBalance = balance("myBalance");
    const collectedAmount = donatedAmount("collectedAmountNoakhali");
    const donateMoney = getInputValueById("input-amount-noakhali");

    if (isNaN(donateMoney)) {
      return;
    }
    if (myCurrentBalance < donateMoney) {
      alert("Not Enough Balance!!");
      return;
    }

    const noakhaliFund = donateMoney + collectedAmount;
    const currentBalance = balance("myBalance") - donateMoney;

    document.getElementById("collectedAmountNoakhali").innerText = noakhaliFund;

    document.getElementById("myBalance").innerText = currentBalance;

    const timeZone3 = new Date().toString();
    const titleNoakhali = document.getElementById("titleNoakhali").innerText;

    const div3 = document.createElement("div");
    div3.classList.add(
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

    div3.innerHTML = `
                                         <h1 class="text-2xl font-semibold">
                                         ${donateMoney} BDT is Donated for ${titleNoakhali};
                                         </h1>

                                         <p class="text-lg">
                                         ${timeZone3}</p>
                                    `;
    document.getElementById("history").appendChild(div3);
  });
