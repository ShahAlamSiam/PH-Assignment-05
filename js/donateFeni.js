document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const myCurrentBalance = balance("myBalance");
    const collectedAmount2 = donatedAmount("collectedAmountFeni");
    const donateMoney2 = getInputValueById("input-amount-feni");

    if (isNaN(donateMoney2)) {
      return;
    }
    if (myCurrentBalance < donateMoney2) {
      alert("Not Enough Balance!!");
      return;
    }

    const feniFund = donateMoney2 + collectedAmount2;
    const currentBalance2 = balance("myBalance") - donateMoney2;

    document.getElementById("collectedAmountFeni").innerText = feniFund;

    document.getElementById("myBalance").innerText = currentBalance2;

    const timeZone2 = new Date().toString();
    const titleFeni = document.getElementById("titleFeni").innerText;

    const div2 = document.createElement("div");
    div2.classList.add(
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

    div2.innerHTML = `
                                         <h1 class="text-2xl font-semibold">
                                         ${donateMoney2} BDT is Donated for ${titleFeni};
                                         </h1>

                                         <p class="text-lg">
                                         ${timeZone2}</p>
                                    `;
    document.getElementById("history").appendChild(div2);
  });
