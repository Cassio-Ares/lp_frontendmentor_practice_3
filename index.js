/**
 * searching for data
 */
const form = document.querySelector("#form");
const name_card = document.querySelector("#name");
const number_card = document.querySelector("#number");
const date_MM = document.querySelector("#dateMM");
const date_YY = document.querySelector("#dateYY");
const cvc = document.querySelector("#card_cvc");
const btn = document.querySelector("#inputs_btn");
const inputs_section = document.querySelector('#inputs')
const confirmation = document.querySelector('#confirmation')

/**
 * receiving data
 */

const frontofCard_number = document.querySelector("#frontofCard_number");
const frontofCard_name = document.querySelector("#frontofCard_name");
const mm = document.querySelector("#mm");
const yy = document.querySelector("#yy");
const backSideOfCard_cvc = document.querySelector("#backSideOfCard_cvc");

/**
 * span error
 */
const errorName = document.querySelector("#errorName");
const errorNumber = document.querySelector("#errorNumber");
const errorMM = document.querySelector("#errorMM");
const erroryy = document.querySelector("#errorYY");
const errorCVC = document.querySelector("#errorCVC");

/**
 * RegExp;

 */

const nameRegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const number_cardRegExp = /^[0-9]*$/;
const monthRegExp = /^0[1-9]|1[0-2]*$/;
const yearRegExp = /^[0-9]*$/;
const cvcRegExp = /^[0-9]*$/;

function getName() {
  const isValid_name = nameRegExp.test(name_card.value);

  if (isValid_name) {
    frontofCard_name.innerHTML = `${name_card.value}`;
    errorName.style.display = "none";
  } else {
    errorName.innerHTML = "Just type letters";
    errorName.style.display = "block";
    errorName.classList.add("errorAlert");
  }
}

function getNumber() {
  const isValid_numberCard = number_cardRegExp.test(number_card.value);

  if (isValid_numberCard) {
    const num = `${number_card.value}`;
    frontofCard_number.innerText = num.replace(/(\d{4})/g, "$1 ");
    errorNumber.style.display = "none";
  } else {
    errorNumber.innerHTML = "wrong format, numbers only";
    errorNumber.style.display = "block";
    errorNumber.classList.add("errorAlert");
  }
}

function getMM() {
  const isValid_month = monthRegExp.test(date_MM.value);

  if (isValid_month) {
    mm.innerText = `${date_MM.value}`;
    console.log(date_MM.value);
  } else {
    errorMM.innerHTML = "wrong format, only numbers from 01 to 12";
    errorMM.style.display = "block";
    errorMM.classList.add("errorAlert");
  }
}

function getYY() {
  const isValid_year = yearRegExp.test(date_YY.value);

  if (isValid_year) {
    yy.innerText = `${date_YY.value}`;
    erroryy.style.display = "none";
  } else {
    erroryy.innerHTML = "wrong format, numbers only";
    erroryy.style.display = "block";
    erroryy.classList.add("errorAlert");
  }
}

function getCVC() {
  const isValid_cvc = cvcRegExp.test(cvc.value);

  if (isValid_cvc) {
    backSideOfCard_cvc.innerText = `${cvc.value}`;
    errorCVC.style.display = "none";
  } else {
    errorCVC.innerHTML = "wrong format, numbers only";
    errorCVC.style.display = "block";
    errorCVC.classList.add("errorAlert");
  }
}

name_card.addEventListener("input", getName);
number_card.addEventListener("input", getNumber);
date_MM.addEventListener("input", getMM);
date_YY.addEventListener("input", getYY);
cvc.addEventListener("input", getCVC);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid_name = nameRegExp.test(name_card.value);
  const isValid_numberCard = number_cardRegExp.test(number_card.value);
  const isValid_month = monthRegExp.test(date_MM.value);
  const isValid_year = yearRegExp.test(date_YY.value);
  const isValid_cvc = cvcRegExp.test(cvc.value);

  if (!isValid_name || name_card.value === "") {
    errorName.innerHTML = "Check the data";
    errorName.classList.add("errorAlert");
  } 
  else if (!isValid_numberCard || number_card.value === "") {
    errorNumber.innerHTML = "Check the data";
    errorNumber.classList.add("errorAlert");
  } 
  
  else if (!isValid_month || date_MM.value === "") {
    errorMM.innerHTML = "Check the data";
    errorMM.classList.add("errorAlert");
  } 
  
  else if (!isValid_year || date_YY.value === "") {
    erroryy.innerHTML = "Check the data";
    erroryy.classList.add("errorAlert");
  }
  
  else if (!isValid_cvc || cvc.value === "") {
    errorCVC.innerHTML = "Check the data";
    errorCVC.classList.add("errorAlert");
  } 

  else{
    inputs_section.style.display = "none";
    confirmation.style.display = "block"
  }

});
