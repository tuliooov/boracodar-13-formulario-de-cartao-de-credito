import Warning from "../../../../assets/Warning.svg";


export default function btn() {
  const smalls = document.querySelectorAll("small");
  
  var btnItem = document.querySelector(".btn-primary");
  var validity = document.querySelector("#validade");
  var CVV = document.querySelector("#CVV");
  var Numbers = document.querySelector("#number");
  var PopUp = document.querySelector("article");
  if (
    Numbers.value != "" &&
    validity.value != "" &&
    CVV.value != ""
  ) {
    Numbers.classList.remove("invalid");
    smalls[0].innerHTML = ``;

    validity.classList.remove("invalid");
    smalls[1].innerHTML = ``;

    CVV.classList.remove("invalid");
    smalls[2].innerHTML = ``;

    PopUp.style.display = "flex";
  }
  else {
    if (!Numbers.value != "") {
      Numbers.classList.add("invalid");
      smalls[0].innerHTML = `
      <img src="${Warning}"/>
      Insira um número de cartão válido
      `;
    }
    if (!validity.value != "") {
      validity.classList.add("invalid");
      smalls[1].innerHTML = `
    <img src="${Warning}"/>
      Cartão fora de validade 
    `;
    }
    if (!CVV.value != "") {
      CVV.classList.add("invalid");
      smalls[2].innerHTML = `
    <img src="${Warning}"/>
      CVV Inválido
    `;
    }
  }

}
