function getInputValueById(id) {
  const input = document.getElementById(id).value;
  if (isNaN(input) === true) {
    return alert("Invalid Amount");
  }
  const inputAmount = parseFloat(input);
  return inputAmount;
}

function donatedAmount(id) {
  const collected = document.getElementById(id).innerText;
  const collectedAmount = parseFloat(collected);
  return collectedAmount;
}

function balance(id) {
  const balance = document.getElementById(id).innerText;
  const accountBalance = parseFloat(balance);
  return accountBalance;
}

function showSection(id) {
  document.getElementById("aaa").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
