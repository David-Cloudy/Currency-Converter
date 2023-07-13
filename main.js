"use strict";

const countButton = document.getElementById("count-button");
const currencySelected = document.getElementById("currency-selected");
const amountInput = document.getElementById("amount-input");
const resultWrapper = document.getElementById("result-wrapper");

countButton.addEventListener("click", () => {
  const currency = currencySelected.value;

  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        window.alert("Wystąpił błąd pobierania danych");
      } else {
        const rate = data.rates[0].mid;
        const result = amountInput.value * rate;
        resultWrapper.textContent = `${result.toFixed(2)} zł`;
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
