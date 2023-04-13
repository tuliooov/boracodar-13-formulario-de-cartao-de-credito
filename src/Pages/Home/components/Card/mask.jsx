export default function showOnCard() {
  const cardNumber = document.querySelector("#number");
  const cardHolder = document.querySelector("#titular");
  const cardExpiration = document.querySelector("#validade");

  const cardNumberText = document.querySelector(".numbers");
  const cardHolderText = document.querySelector(".name");
  const cardExpirationText = document.querySelector(".validity");

  cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
      cardNumberText.innerHTML = "1234 1234 1234 1234";
    } else {
      const valuesOfInput = e.target.value.replaceAll(" ", "");

      if (e.target.value.length > 14) {
        e.target.value = valuesOfInput.replace(
          /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
          "$1 $2 $3 $4"
        );
        cardNumberText.innerHTML = valuesOfInput.replace(
          /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
          "$1 $2 $3 $4"
        );
      } else if (e.target.value.length > 9) {
        e.target.value = valuesOfInput.replace(
          /(\d{4})(\d{4})(\d{0,4})/,
          "$1 $2 $3"
        );
        cardNumberText.innerHTML = valuesOfInput.replace(
          /(\d{4})(\d{4})(\d{0,4})/,
          "$1 $2 $3"
        );
      } else if (e.target.value.length > 4) {
        e.target.value = valuesOfInput.replace(
          /(\d{4})(\d{0,4})/,
          "$1 $2"
        );
        cardNumberText.innerHTML = valuesOfInput.replace(
          /(\d{4})(\d{0,4})/,
          "$1 $2"
        );
      } else {
        cardNumberText.innerHTML = valuesOfInput
      }
    }
  });

  cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
      cardHolderText.innerHTML = "Seu Nome Aqui";
    } else {
      cardHolderText.innerHTML = e.target.value.toUpperCase();

    }
  })

  cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
      cardExpirationText.innerHTML = "02/20"
    } else {
      const valuesOfInput = e.target.value.replace("/", "");
      if (e.target.value.length > 2) {
        e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      } else {
        cardExpirationText.innerHTML = valuesOfInput;
      }
    }
  })
}