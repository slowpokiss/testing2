export default class cardType {
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
    this.cardList.forEach((el) => {
      el.children[0].style = "opacity: 0.4;";
    });
  }
}
