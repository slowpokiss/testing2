

export default class validator {
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
    this.validBtn.addEventListener("click", (ev) => {
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
