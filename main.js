"use strict";

const countForm = document.getElementById("count-form");
const resultWrapper = document.getElementById("result-wrapper");

countForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const currency = event.target.currency.value;

  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data?.rates?.length) {
        window.alert("Wystąpił błąd pobierania danych");
        return;
      }
      const rate = data.rates[0].mid;
      const result = event.target.amount.value * rate;
      resultWrapper.textContent = `${result.toFixed(2)} zł`;
      resultWrapper.style.display = "flex";
    })
    .catch(() => {
      window.alert("Wystąpił błąd pobierania danych");
    });
});
