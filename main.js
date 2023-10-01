/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/classes/validator.js
class validator {
  valid(number) {
    const lastGigit = Number(number[number.length - 1]);
    number = number.slice(0, -1);
    number = Array.from(number);
    number.reverse();
    number = number.map((el, ind) => {
      el = Number(el);
      if (ind % 2 === 0) {
        return el * 2 > 9 ? el * 2 - 9 : el * 2;
      } else {
        return el;
      }
    });
    number = (number.reduce((sum, el) => sum + el, 0) + lastGigit) % 10;
    return number === 0;
  }
  addValid() {
    this.validBtn = document.querySelector(".validator-btn");
    this.validAnswer = document.querySelector(".validator-answer");
    this.validBtn.addEventListener("click", ev => {
      ev.preventDefault();
      this.input = document.querySelector(".validator-field");
      if (this.valid(this.input.value)) {
        this.input.parentElement.classList.remove("not-valid");
        this.input.parentElement.classList.add("valid");
        this.validAnswer.textContent = "Number is valid!";
      } else {
        this.input.parentElement.classList.remove("valid");
        this.input.parentElement.classList.add("not-valid");
        this.validAnswer.textContent = "Number is not valid!";
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/classes/cardType.js
class cardType {
  constructor() {
    this.input = document.querySelector(".validator-field");
    this.cardList = document.querySelectorAll(".card");
  }
  currCard() {
    this.input.addEventListener("input", () => {
      this.clearCardStyle();
      if (/^4{1}/.test(this.input.value)) {
        this.cardList[0].children[0].style = "opacity: 1;";
      }
      if (/^34|37{1}/.test(this.input.value)) {
        this.cardList[3].children[0].style = "opacity: 1;";
      }
      if (/^5[1-4]/.test(this.input.value)) {
        this.cardList[1].children[0].style = "opacity: 1;";
      }
      if (/^(35(2[8-9]|[3-8][0-9]))/.test(this.input.value)) {
        this.cardList[5].children[0].style = "opacity: 1;";
      }
      if (/^((64[4-9])|65|6011|622[126-925])/.test(this.input.value)) {
        this.cardList[4].children[0].style = "opacity: 1;";
      }
      if (/^2{1}/.test(this.input.value)) {
        this.cardList[2].children[0].style = "opacity: 1;";
      }
    });
  }
  clearCardStyle() {
    this.cardList.forEach(el => {
      el.children[0].style = "opacity: 0.4;";
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const vld = new validator();
vld.addValid();
const crdType = new cardType();
crdType.currCard();
;// CONCATENATED MODULE: ./src/index.js


// TODO: write your code in app.js
/******/ })()
;