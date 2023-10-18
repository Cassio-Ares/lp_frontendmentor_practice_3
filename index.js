/**
 * searching for data
 */
const form = document.querySelector("#form");
const name_card = document.querySelector("#name");
const number_card = document.querySelector("#number");
const date_MM = document.querySelector("#dateMM");
const date_YY = document.querySelector("#dateYY");
const cvc = document.querySelector("#card_cvc");
const btn = document.addEventListener('#inputs_btn')

/**
 * receiving data
 */

const frontofCard_number = document.querySelector("#frontofCard_number");
const frontofCard_name = document.querySelector("#frontofCard_name");
const mm = document.querySelector("#mm");
const yy = document.querySelector("#yy");
const backSideOfCard_cvc = document.querySelector("#backSideOfCard_cvc");

const nameRegExp = /^[a-zA-Z]*$/;
const number_cardRegExp = /^[0-9]*$/;
const monthRegExp = /^0[1-9]|1[0-2]*$/;
const yearRegExp = /^[0-9]*$/;
const cvcRegExp = /^[0-9]*$/;

function getData() {
  const isValid_name =
    name_card.value.length  || nameRegExp.test(name_card.value);

  if (isValid_name) {
    console.log("oi"); //quando digito letras
  } else {
    console.log("iiiii"); // quando digito numeros
  }

  const isValid_numberCard =
    number_card.value.length === "" ||
    number_cardRegExp.test(number_card.value);

  if (isValid_numberCard) {
    console.log("oi"); //quando digito number
  } else {
    console.log("iiiii"); // quando digito letras
  }

  const isValid_month = monthRegExp.test(date_MM.value);

  if (isValid_month) {
    console.log("oii"); //quando digito number
  } else {
    console.log("pppp"); // quando digito letras
  }

  const isValid_year = yearRegExp.test(date_YY.value);

  if (isValid_year) {
    console.log("oii"); //quando digito number
  } else {
    console.log("pppp"); // quando digito letras
  }

  const isValid_cvc = cvcRegExp.test(cvc.value);

  if (isValid_cvc) {
    console.log("o88"); //quando digito number
  } else {
    console.log("pga"); // quando digito letras
  }
}

name_card.addEventListener("input", getData);
number_card.addEventListener("input", getData);
date_MM.addEventListener("input", getData);
date_YY.addEventListener("input", getData);
cvc.addEventListener("input", getData);



btn.addEventListener('click', () =>{
    if(!isValid_name){

    }
    else if(!isValid_numberCard){

    }
    else if(!isValid_month){

    }
    else if(!isValid_year){

    }
    else if(!isValid_cvc){

    }
    else{
        
    }
})